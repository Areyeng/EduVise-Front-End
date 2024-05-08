"use client";

import { getAxiosInstance } from '@/utils/api';
import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import {
    deleteFacultyErrorAction,
    deleteFacultyPendingAction,
    deleteFacultySuccessAction,
    getAllFacultiesErrorAction,
    getAllFacultiesPendingAction,
    getAllFacultiesSuccessAction,
    getFacultiesBySkillsErrorAction,
    getFacultiesBySkillsPendingAction,
    getFacultiesBySkillsSuccessAction,
    getFacultyErrorAction,
    getFacultyPendingAction,
    getFacultySuccessAction
} from './action';
import { FacultyActionsContext, FacultyStateContext, FacultyStateContextInitial } from './context';
import facultyReducer from './reducer';
import { Answer } from '../ResponseProvider/interface';

interface FacultyProviderProps {
    children: React.ReactNode;
}

const FacultyProvider: React.FC<FacultyProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(facultyReducer, FacultyStateContextInitial);
    const { authRes } = useAuthState();
    
    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);

    const GetFaculty = async (FacultyId:any) => {
        try {
            dispatch(getFacultyPendingAction());
            instance.get(`/Faculty/GetByFacultyId?Id=${FacultyId}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getFacultySuccessAction(resp?.result));
                } else {
                    message.error("Faculty not fetched")
                    dispatch(getFacultyErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Faculty not fetched")//API not running,Axios suddenly faulty
            dispatch(getFacultyErrorAction())
        }
    }
    
    const GetAllFaculties = async () => {
        try {
            dispatch(getAllFacultiesPendingAction());
            instance.get('/Faculty/GetAllFaculties')
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getAllFacultiesSuccessAction(resp?.result));
                } else {
                   dispatch(getAllFacultiesErrorAction())
                }
            })
        } catch(error){
            message.error("Faculties not fetched")
            dispatch(getAllFacultiesErrorAction())
        }
    }

    const DeleteFaculty = async (id:string) => {
        try {
            dispatch(deleteFacultyPendingAction());
            instance.delete(`/Faculty/Delete?Id=${id}`)
                .then(res => res.data)
                .then((resp) => {
                    if (resp?.success) {
                        message.success("Deleted Facultys succesfully");
                        dispatch(deleteFacultySuccessAction());
                    } else {
                        dispatch(deleteFacultyErrorAction()) 
                    }
                });
        } catch (error) {
            message.error("Faculty not deleted");
        }
    }
    const GetFacultyBySkills = async (skills: any) =>{
        try {
            dispatch(getFacultiesBySkillsPendingAction());
            instance.post(`/Faculty/GetFacultiesBySkills`,skills)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getFacultiesBySkillsSuccessAction(resp?.result));
                } else {
                   dispatch(getFacultiesBySkillsErrorAction())
                }
            })
        } catch(error){
            message.error("Faculties not fetched")
            dispatch(getFacultiesBySkillsErrorAction())
        }
    }
  
    return (
        <FacultyStateContext.Provider value={state}>
            <FacultyActionsContext.Provider value={{ GetFaculty, GetAllFaculties, DeleteFaculty, GetFacultyBySkills}}>
                {children}
            </FacultyActionsContext.Provider>
        </FacultyStateContext.Provider>
    );
}

const useFacultyState = () => {
    const context = useContext(FacultyStateContext);
    if (!context) {
        throw new Error('useFacultyState must be used within an FacultyProvider');
    }
    return context;
}

const useFacultyActions = () => {
    const context = useContext(FacultyActionsContext);
    if (!context) {
        throw new Error('useFacultyState must be used within an FacultyProvider');
    }
    return context;
}

export { FacultyProvider, useFacultyActions, useFacultyState };

