"use client";
import React, { useContext, useReducer } from 'react';
import facultyReducer from './reducer';
import axios from 'axios';
import { Faculty, FacultyAction, FacultyState } from './interface';
import { message } from 'antd';
import { deleteData, getData, postData} from '@/utils/api';
import { FacultyActionsContext, FacultyStateContext, FacultyStateContextInitial } from './context';
import { getFacultyPendingAction,getFacultySuccessAction,getFacultyErrorAction,getAllFacultiesErrorAction,getAllFacultiesPendingAction,getAllFacultiesSuccessAction, deleteFacultyPendingAction, deleteFacultySuccessAction, deleteFacultyErrorAction } from './action';


interface FacultyProviderProps {
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

const FacultyProvider: React.FC<FacultyProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(facultyReducer, FacultyStateContextInitial);

    const GetFaculty = async (FacultyId:any) => {
        try {
            dispatch(getFacultyPendingAction());
            getData(`/Faculty/GetByFacultyId?Id=${FacultyId}`)
                .then((resp) => {
                if (resp?.success) {
                   message.success("Fetched Faculty succesfully");
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
            getData('/Faculty/GetAllFaculties')
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getAllFacultiesSuccessAction(resp?.result));
                } else {
                   dispatch(getAllFacultiesErrorAction())
                }
            })
        }catch(error){
                message.error("Faculties not fetched")
                dispatch(getAllFacultiesErrorAction())
        }
    }
    const DeleteFaculty = async (id:string) => {
        try {
            dispatch(deleteFacultyPendingAction());
            deleteData(`/Faculty/Delete?Id=${id}`).then((resp) => {
                if (resp?.success) {
                    message.success("Deleted Facultys succesfully");
                    dispatch(deleteFacultySuccessAction());
                } else {
                    dispatch(deleteFacultyErrorAction()) 
                }
            })

        } catch (error) {
            message.error("Faculty not deleted");
        }
    }
    return (
        <FacultyStateContext.Provider value={state}>
            <FacultyActionsContext.Provider value={{ GetFaculty, GetAllFaculties, DeleteFaculty}}>
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
};
const useFacultyActions = () => {
    const context = useContext(FacultyActionsContext);
    if (!context) {
        throw new Error('useFacultyState must be used within an FacultyProvider');
    }
    return context;
};

export { FacultyProvider, useFacultyState, useFacultyActions };