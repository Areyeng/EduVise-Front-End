"use client";

import { message } from 'antd';
import axios from 'axios';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import { } from '../QuestionProvider/action';
import { getAllQuestionsErrorAction, 
         getAllQuestionsPendingAction, 
         getAllQuestionsSuccessAction, 
         getQuestionErrorAction, 
         getQuestionPendingAction, 
         getQuestionSuccessAction } from './action';
import { QuestionActionsContext, QuestionStateContext, QuestionStateContextInitial } from './context';
import QuestionReducer from './reducer';
import { getAxiosInstance } from '@/utils/api';

interface QuestionProviderProps {
    children: React.ReactNode;
}

const QuestionProvider: React.FC<QuestionProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(QuestionReducer, QuestionStateContextInitial);
    const { authRes } = useAuthState();
    
    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
      }, [authRes]);

    const GetQuestion = async (QuestionId:any) => {
        try {
            dispatch(getQuestionPendingAction());
            instance.get(`/Question/GetByQuestionId?Id=${QuestionId}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getQuestionSuccessAction(resp?.result));
                } else {
                    message.error("Question not fetched")
                    dispatch(getQuestionErrorAction())
                }
            })
        } catch (error) {
            message.error("Question not fetched")
            dispatch(getQuestionErrorAction())
        }
    }
    
    const GetAllQuestions = async () => {
        try {
            dispatch(getAllQuestionsPendingAction());
            instance.get('/Question/GetAllQuestions')
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getAllQuestionsSuccessAction(resp?.result));
                } else {
                   dispatch(getAllQuestionsErrorAction())
                }
            });
        } catch (error) {
            message.error("Questions not fetched")
            dispatch(getAllQuestionsErrorAction())
        }
    }

    return (
        <QuestionStateContext.Provider value={state}>
            <QuestionActionsContext.Provider value={{ GetQuestion, GetAllQuestions}}>
                {children}
            </QuestionActionsContext.Provider>
        </QuestionStateContext.Provider>
    );
}
const useQuestionState = () => {
    const context = useContext(QuestionStateContext);
    if (!context) {
        throw new Error('useQuestionState must be used within an QuestionProvider');
    }
    return context;
};
const useQuestionActions = () => {
    const context = useContext(QuestionActionsContext);
    if (!context) {
        throw new Error('useQuestionState must be used within an QuestionProvider');
    }
    return context;
};

export { QuestionProvider, useQuestionActions, useQuestionState };
