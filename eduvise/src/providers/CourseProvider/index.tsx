"use client";

import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import { 
    getAllCoursesByFacultyErrorAction, 
    getAllCoursesByFacultyPendingAction, 
    getAllCoursesByFacultySuccessAction, 
    getAllCoursesErrorAction, 
    getAllCoursesPendingAction, 
    getAllCoursesSuccessAction, 
    getCourseErrorAction, 
    getCoursePendingAction, 
    getCourseSuccessAction 
} from './action';
import { CourseActionsContext, CourseStateContext, CourseStateContextInitial } from './context';
import CourseReducer from './reducer';
import { getAxiosInstance } from '@/utils/api';

interface CourseProviderProps {
    children: React.ReactNode;
}

const CourseProvider: React.FC<CourseProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(CourseReducer, CourseStateContextInitial);
    const { authRes } = useAuthState();
    
    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
      }, [authRes]);

    const GetCourse = async (CourseId:any) => {
        try {
            dispatch(getCoursePendingAction());
            instance.get(`/Course/Get?Id=${CourseId}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getCourseSuccessAction(resp?.result));
                } else {
                    message.error("Course not fetched")
                    dispatch(getCourseErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Course not fetched")//API not running,Axios suddenly faulty
            dispatch(getCourseErrorAction())
        }
    }
    
    const GetAllCourses = async () => {
        try {
            dispatch(getAllCoursesPendingAction());
            instance.get('/Course/GetAll')
                .then(res => res.data)
                .then((resp) => {
                    console.log(JSON.stringify(resp));
                if (resp?.success) {
                    dispatch(getAllCoursesSuccessAction(resp?.result));
                } else {
                   dispatch(getAllCoursesErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Course not fetched")//API not running,Axios suddenly faulty
            dispatch(getAllCoursesErrorAction())
        }
    }
    const GetCoursesByFacultyId = async (id:string) => {
        try {
            dispatch(getAllCoursesByFacultyPendingAction());
            instance.get(`/Course/GetCoursesByFacultyId?facultyId=${id}`)
                .then(res => res.data)
                .then((resp) => {
                    console.log(JSON.stringify(resp));
                if (resp?.success) {
                    dispatch(getAllCoursesByFacultySuccessAction(resp?.result));
                } else {
                   dispatch(getAllCoursesByFacultyErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Course not fetched")//API not running,Axios suddenly faulty
            dispatch(getAllCoursesByFacultyErrorAction())
        }
    }
    return (
        
        <CourseStateContext.Provider value={state}>
            <CourseActionsContext.Provider value={{ GetCourse, GetAllCourses, GetCoursesByFacultyId}}>
                {children}
            </CourseActionsContext.Provider>
        </CourseStateContext.Provider>
    );
}
const useCourseState = () => {
    const context = useContext(CourseStateContext);
    if (!context) {
        throw new Error('useCourseState must be used within an CourseProvider');
    }
    return context;
};
const useCourseActions = () => {
    const context = useContext(CourseActionsContext);
    if (!context) {
        throw new Error('useCourseState must be used within an CourseProvider');
    }
    return context;
};

export { CourseProvider, useCourseActions, useCourseState };
