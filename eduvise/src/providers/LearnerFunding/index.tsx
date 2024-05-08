"use client";

import { getAxiosInstance } from '@/utils/api';
import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import SavedFundingReducer from './reducer';
import { SavedFundingActionsContext, SavedFundingStateContext, SavedStateContextInitial } from './context';
import { addFundingErrorAction, addFundingPendingAction, addFundingSuccessAction, getFundingErrorAction, getFundingPendingAction, getFundingSuccessAction } from './action';
import { SavedFunding } from './interface';

interface SavedFundingProviderProps {
    children: React.ReactNode;
}

const SavedFundingProvider: React.FC<SavedFundingProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(SavedFundingReducer,SavedStateContextInitial);
    const { authRes } = useAuthState();

    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);

    const AddFunding = async (savedFunding:SavedFunding) => {
        try {
            dispatch(addFundingPendingAction());
            instance.post('/LearnerFunding/CreateLearnerFunding', savedFunding)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    message.success("Added Funding succesfully");
                   dispatch(addFundingSuccessAction(resp?.result));
                } else {
                    message.error("Funding not fetched")
                    dispatch(addFundingErrorAction())
                }
            })
        } catch (error) {
            message.error("Funding not fetched")
            dispatch(addFundingErrorAction())
        }
    }
    const GetFundings = async (learner:string) => {
        try {
            console.log()
            dispatch(getFundingPendingAction());
            instance.get(`/LearnerFunding/GetAllFundingsForSpecificLearner?id=${learner}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getFundingSuccessAction(resp?.result));
                } else {
                    message.error("Fundings not fetched")
                    dispatch(getFundingErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Fundings not fetched")//API not running,Axios suddenly faulty
            dispatch(getFundingErrorAction())
        }
    }
   
    return (
        <SavedFundingStateContext.Provider value={state}>
            <SavedFundingActionsContext.Provider value={{ AddFunding, GetFundings}}>
                {children}
            </SavedFundingActionsContext.Provider>
        </SavedFundingStateContext.Provider>
    );
}
const useSavedFundingState = () => {
    const context = useContext(SavedFundingStateContext);
    if (!context) {
        throw new Error('useSavedFundingState must be used within an SavedFundingProvider');
    }
    return context;
};
const useSavedFundingActions = () => {
    const context = useContext(SavedFundingActionsContext);
    if (!context) {
        throw new Error('useSavedFundingState must be used within an SavedFundingProvider');
    }
    return context;
};

export { SavedFundingProvider, useSavedFundingActions, useSavedFundingState };

