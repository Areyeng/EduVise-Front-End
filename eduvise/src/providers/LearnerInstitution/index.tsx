"use client";

import { getAxiosInstance } from '@/utils/api';
import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';

import SavedInstitutionReducer from './reducer';
import { SavedInstitutionActionsContext, SavedInstitutionStateContext, SavedStateContextInitial } from './context';
import { addInstitutionErrorAction, addInstitutionPendingAction, addInstitutionSuccessAction, getInstitutionErrorAction, getInstitutionPendingAction, getInstitutionSuccessAction } from './action';
import { SavedInstitution } from './interface';

interface SavedInstitutionProviderProps {
    children: React.ReactNode;
}

const SavedInstitutionProvider: React.FC<SavedInstitutionProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(SavedInstitutionReducer,SavedStateContextInitial);
    const { authRes } = useAuthState();

    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);

    const AddInstitution = async (savedInstitution:SavedInstitution) => {
        try {
            dispatch(addInstitutionPendingAction());
            instance.post('/LearnerInstitution/CreateLearnerInstitution', savedInstitution)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   message.success("Added institution succesfully");
                   dispatch(addInstitutionSuccessAction(resp?.result));
                  
                } else {
                    message.error("Institution not fetched")
                    dispatch(addInstitutionErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Institution not fetched")//API not running,Axios suddenly faulty
            dispatch(addInstitutionErrorAction())
        }
    }
    const GetInstitutions = async (learner:string) => {
        try {
            dispatch(getInstitutionPendingAction());
            instance.get(`/LearnerInstitution/GetAllInstitutionsForSpecificLearner?id=${learner}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getInstitutionSuccessAction(resp?.result));
                } else {
                    message.error("Institutions not fetched")
                    dispatch(getInstitutionErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Institutions not fetched")//API not running,Axios suddenly faulty
            dispatch(getInstitutionErrorAction())
        }
    }
   
    return (
        <SavedInstitutionStateContext.Provider value={state}>
            <SavedInstitutionActionsContext.Provider value={{ AddInstitution, GetInstitutions}}>
                {children}
            </SavedInstitutionActionsContext.Provider>
        </SavedInstitutionStateContext.Provider>
    );
}
const useSavedInstitutionState = () => {
    const context = useContext(SavedInstitutionStateContext);
    if (!context) {
        throw new Error('useSavedInstitutionState must be used within an SavedInstitutionProvider');
    }
    return context;
};
const useSavedInstitutionActions = () => {
    const context = useContext(SavedInstitutionActionsContext);
    if (!context) {
        throw new Error('useSavedInstitutionState must be used within an SavedInstitutionProvider');
    }
    return context;
};

export { SavedInstitutionProvider, useSavedInstitutionActions, useSavedInstitutionState };

