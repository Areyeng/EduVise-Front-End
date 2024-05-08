"use client";

import { getAxiosInstance } from '@/utils/api';
import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import { getInfoPendingAction,getInfoSuccessAction,getInfoErrorAction, updateInfoErrorAction, updateInfoPendingAction, updateInfoSuccessAction } from './action'
import { InfoActionsContext, InfoStateContext,InfoStateContextInitial} from './context';
import LearnerInfoReducer from './reducer';
import infoReducer from './reducer';
import axios from 'axios';
import { LearnerInfo } from './interface';

interface LearnerInfoProviderProps {
    children: React.ReactNode;
}

const LearnerInfoProvider: React.FC<LearnerInfoProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(infoReducer,InfoStateContextInitial);
    const { authRes } = useAuthState();
   
    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        console.log("auth res::",authRes)
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const GetLearnerInfo = async () => {
        try {
            dispatch(getInfoPendingAction());
            
            const response = await instance.get(`/Learner/GetMyLearnerDetails`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            const resp = response.data;
            if (resp?.success) {
                dispatch(getInfoSuccessAction(resp?.result));
            } else {
                
                dispatch(getInfoErrorAction());
            }
        } catch (error) {
            dispatch(getInfoErrorAction());
        }
    };
    const UpdateLearnerInfo = async (newInfo: LearnerInfo) => {
        try {
            dispatch(updateInfoPendingAction());
            console.log("new Info",newInfo)
            // Serialize the newInfo object before sending it in the request
            const serializedInfo = JSON.stringify(newInfo);

            console.log("Ser",serializedInfo)
    
            const response = await instance.put(`/Learner/UpdateLearner`, serializedInfo);
            
            const resp = response.data;
            
            if (resp?.success) {
                message.success("Profile updated");
                dispatch(updateInfoSuccessAction());
                GetLearnerInfo()
            } else {
                message.error("LearnerInfo not updated");
                dispatch(updateInfoErrorAction());
            }
        } catch (error) {
            message.error("LearnerInfo not updated"); 
            console.log("error",error)
            dispatch(updateInfoErrorAction());
        }
    };
    
    return (
        <InfoStateContext.Provider value={state}>
            <InfoActionsContext.Provider value={{ GetLearnerInfo,UpdateLearnerInfo}}>
                {children}
            </InfoActionsContext.Provider>
        </InfoStateContext.Provider>
    );
}
const useLearnerInfoState = () => {
    const context = useContext(InfoStateContext);
    if (!context) {
        throw new Error('useLearnerInfoState must be used within an LearnerInfoProvider');
    }
    return context;
};
const useLearnerInfoActions = () => {
    const context = useContext(InfoActionsContext);
    if (!context) {
        throw new Error('useLearnerInfoState must be used within an LearnerInfoProvider');
    }
    return context;
};

export { LearnerInfoProvider, useLearnerInfoActions, useLearnerInfoState };

