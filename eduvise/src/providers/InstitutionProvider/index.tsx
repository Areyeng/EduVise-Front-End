"use client";
import React, { useContext, useReducer } from 'react';
import institutionReducer from './reducer';
import axios from 'axios';
import { message } from 'antd';
import { getData, postData,deleteData, updateData } from '@/utils/api';
import { InstitutionActionsContext, InstitutionStateContext, InstitutionStateContextInitial } from './context';
import { getInstitutionPendingAction,getInstitutionSuccessAction,getInstitutionErrorAction,getAllInstitutionsErrorAction,getAllInstitutionsPendingAction,getAllInstitutionsSuccessAction, deleteInstitutionPendingAction, deleteInstitutionSuccessAction, deleteInstitutionErrorAction } from './action';


interface InstitutionProviderProps {
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

const InstitutionProvider: React.FC<InstitutionProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(institutionReducer, InstitutionStateContextInitial);

    const GetInstitution = async (InstitutionId:string) => {
        try {
            dispatch(getInstitutionPendingAction());
            getData(`/Institution/GetByInstitutionId?Id=${InstitutionId}`)
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getInstitutionSuccessAction(resp?.result));
                  
                } else {
                    message.error("Institution not fetched")
                    dispatch(getInstitutionErrorAction()) 
                }
            })
        } catch (error) {
            message.error("Institution not fetched")
            dispatch(getInstitutionErrorAction())
        }
    }
    
    const GetAllInstitutions = async () => {
        try {
                dispatch(getAllInstitutionsPendingAction());
                getData('/Institution/GetAllInstitutions')
                    .then((resp) => {
                if (resp?.success) {
                    dispatch(getAllInstitutionsSuccessAction(resp?.result));
                } else {
                    dispatch(getAllInstitutionsErrorAction()) 
                }
            })
        } catch (error) {
            dispatch(getAllInstitutionsErrorAction())
        }
    }
    const DeleteInstitution = async (id:string) => {
        try {
            dispatch(deleteInstitutionPendingAction());
            deleteData(`/Book/Delete?Id=${id}`).then((resp) => {
                if (resp?.success) {
                    message.success("Deleted Institutions succesfully");
                    dispatch(deleteInstitutionSuccessAction());
                } else {
                    dispatch(deleteInstitutionErrorAction())//If it didn't follow endpoint policies 
                }
            })

        } catch (error) {
            message.error("Book not deleted");
        }
    }
    return (
        <InstitutionStateContext.Provider value={state}>
            <InstitutionActionsContext.Provider value={{ GetInstitution, GetAllInstitutions, DeleteInstitution }}>
                {children}
            </InstitutionActionsContext.Provider>
        </InstitutionStateContext.Provider>
    );
    
}
const useInstitutionState = () => {
    const context = useContext(InstitutionStateContext);
    if (!context) {
        throw new Error('useInstitutionState must be used within an InstitutionProvider');
    }
    return context;
};
const useInstitutionActions = () => {
    const context = useContext(InstitutionActionsContext);
    if (!context) {
        throw new Error('useInstitutionState must be used within an InstitutionProvider');
    }
    return context;
};

export { InstitutionProvider, useInstitutionState, useInstitutionActions };