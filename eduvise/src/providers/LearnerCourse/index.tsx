"use client";

import { getAxiosInstance } from '@/utils/api';
import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import SavedCourseReducer from './reducer';
import { SavedCourseActionsContext, SavedCourseStateContext, SavedStateContextInitial } from './context';
import { addCourseErrorAction, addCoursePendingAction, addCourseSuccessAction, getCourseErrorAction, getCoursePendingAction, getCourseSuccessAction } from './action';
import { SavedCourse } from './interface';

interface SavedCourseProviderProps {
    children: React.ReactNode;
}

const SavedCourseProvider: React.FC<SavedCourseProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(SavedCourseReducer,SavedStateContextInitial);
    const { authRes } = useAuthState();

    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);

    const AddCourse = async (savedCourse:SavedCourse) => {
        try {
            dispatch(addCoursePendingAction());
            instance.post('/LearnerCourse/CreateLearnerCourse', savedCourse)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   message.success("Added Course succesfully");
                   dispatch(addCourseSuccessAction(resp?.result));
                  
                } else {
                    message.error("Course not fetched")
                    dispatch(addCourseErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Course not fetched")//API not running,Axios suddenly faulty
            dispatch(addCourseErrorAction())
        }
    }
    const GetCourses = async (learner:string) => {
        try {
            console.log()
            dispatch(getCoursePendingAction());
            instance.get(`/LearnerCourse/GetAllCoursesForSpecificLearner?id=${learner}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getCourseSuccessAction(resp?.result));
                } else {
                    dispatch(getCourseErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Courses not fetched")//API not running,Axios suddenly faulty
            dispatch(getCourseErrorAction())
        }
    }
   
    return (
        <SavedCourseStateContext.Provider value={state}>
            <SavedCourseActionsContext.Provider value={{ AddCourse, GetCourses}}>
                {children}
            </SavedCourseActionsContext.Provider>
        </SavedCourseStateContext.Provider>
    );
}
const useSavedCourseState = () => {
    const context = useContext(SavedCourseStateContext);
    if (!context) {
        throw new Error('useSavedCourseState must be used within an SavedCourseProvider');
    }
    return context;
};
const useSavedCourseActions = () => {
    const context = useContext(SavedCourseActionsContext);
    if (!context) {
        throw new Error('useSavedCourseState must be used within an SavedCourseProvider');
    }
    return context;
};

export { SavedCourseProvider, useSavedCourseActions, useSavedCourseState };

