"use client";

import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import { 
    deleteInstitutionErrorAction, 
    deleteInstitutionPendingAction, 
    deleteInstitutionSuccessAction, 
    getAllInstitutionsErrorAction, 
    getAllInstitutionsPendingAction, 
    getAllInstitutionsSuccessAction, 
    getInstitutionErrorAction, 
    getInstitutionPendingAction, 
    getInstitutionSuccessAction 
} from './action';
import { InstitutionActionsContext, InstitutionStateContext, InstitutionStateContextInitial } from './context';
import institutionReducer from './reducer';
import { getAxiosInstance } from '@/utils/api';

interface InstitutionProviderProps {
    children: React.ReactNode;
}

const InstitutionProvider: React.FC<InstitutionProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(institutionReducer, InstitutionStateContextInitial);
    const { authRes } = useAuthState();
    
    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);

    const GetInstitution = async (InstitutionId:string) => {
        try {
            dispatch(getInstitutionPendingAction());
            instance.get(`/Institution/GetByInstitutionId?Id=${InstitutionId}`)
                .then(res => res.data)
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
                instance.get('/Institution/GetAllInstitutions')
                    .then(res => res.data)
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
            instance.delete(`/Institution/Delete?Id=${id}`)
                .then(res => res.data)
                .then((resp) => {
                    if (resp?.success) {
                        message.success("Deleted Institutions succesfully");
                        dispatch(deleteInstitutionSuccessAction());
                    } else {
                        dispatch(deleteInstitutionErrorAction())//If it didn't follow endpoint policies 
                    }
                })

        } catch (error) {
            message.error("Institution not deleted");
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

export { InstitutionProvider, useInstitutionActions, useInstitutionState };
