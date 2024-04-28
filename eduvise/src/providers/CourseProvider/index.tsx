"use client";
import React, { useContext, useReducer } from 'react';
import CourseReducer from './reducer';
import axios from 'axios';
import { Course } from './interface';
import { message } from 'antd';
import { getData, postData,deleteData, updateData } from '@/utils/api';
import { CourseActionsContext, CourseStateContext, CourseStateContextInitial } from './context';
import { getCoursePendingAction,getCourseSuccessAction,getCourseErrorAction,getAllCoursesErrorAction,getAllCoursesPendingAction,getAllCoursesSuccessAction,deleteCoursePendingAction,deleteCourseSuccessAction,deleteCourseErrorAction } from './action';

interface CourseProviderProps {
    children: React.ReactNode;
}

export function getAxiosInstance (accessToken: string | null){
    const baseUrl=process.env.NEXT_PUBLIC_API_URL;
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      return instance;
}

const CourseProvider: React.FC<CourseProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(CourseReducer, CourseStateContextInitial);

    const GetCourse = async (CourseId:any) => {
        try {
            dispatch(getCoursePendingAction());
            getData(`/Course/Get?Id=${CourseId}`)
                .then((resp) => {
                if (resp?.success) {
                   message.success("Fetched Course succesfully");
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
            getData('/Course/GetAll')
                .then((resp) => {
                    console.log(JSON.stringify(resp));
                if (resp?.success) {
                   message.success("Fetched Course succesfully");
                   console.log("items", resp?.result?.items);
                   dispatch(getAllCoursesSuccessAction(resp?.result?.items));
                } else {
                   dispatch(getAllCoursesErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Course not fetched")//API not running,Axios suddenly faulty
            dispatch(getAllCoursesErrorAction())
        }
    }
    const DeleteCourse = async (id:string) => {
        try {
            dispatch(deleteCoursePendingAction());
            deleteData(`/Course/Delete?Id=${id}`).then((resp) => {
                if (resp?.success) {
                    message.success("Deleted Courses succesfully");
                    dispatch(deleteCourseSuccessAction());
                } else {
                    dispatch(deleteCourseErrorAction()) 
                }
            })

        } catch (error) {
            message.error("Course not deleted");
        }
    }
    return (
        
        <CourseStateContext.Provider value={state}>
            <CourseActionsContext.Provider value={{ GetCourse, GetAllCourses, DeleteCourse}}>
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

export { CourseProvider, useCourseState, useCourseActions };