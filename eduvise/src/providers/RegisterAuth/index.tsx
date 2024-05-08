"use client";

import { message } from 'antd';
import axios from 'axios';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import { registrationErrorAction, registrationPendingAction, registrationSuccessAction } from './action';
import { RegisterActionsContext, RegisterStateContext, RegisterStateContextInitial } from './context';
import { Register } from './interface';
import registerReducer from './reducer';

interface RegisterProviderProps {
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

const RegisterProvider: React.FC<RegisterProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(registerReducer, RegisterStateContextInitial);

    const { authRes } = useAuthState();

    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);

    const Register =  (userDetails: Register) => {
        try {
            dispatch(registrationPendingAction());
            instance.post('/Learner/CreateLearner', userDetails)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   message.success("Added learner succesfully");
                   dispatch(registrationSuccessAction(resp?.result));
                   
                } else {
                   dispatch(registrationErrorAction())
                }
            })
        } catch (error) {
            message.error("learner not added")
            dispatch(registrationErrorAction())
        }
    }

    return (
        <RegisterStateContext.Provider value={state}>
            <RegisterActionsContext.Provider value={{ Register }}>
                {children}
            </RegisterActionsContext.Provider>
        </RegisterStateContext.Provider>
    );
    
}
const useRegisterState = () => {
    const context = useContext(RegisterStateContext);
    if (!context) {
        throw new Error('useRegisterState must be used within an RegisterProvider');
    }
    return context;
};
const useRegisterActions = () => {
    const context = useContext(RegisterActionsContext);
    if (!context) {
        throw new Error('useRegisterState must be used within an RegisterProvider');
    }
    return context;
};

export { RegisterProvider, useRegisterActions, useRegisterState };

