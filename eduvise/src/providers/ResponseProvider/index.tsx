"use client";
import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import { addLearnerAnswersErrorAction, 
         addLearnerAnswersPendingAction,
         addLearnerAnswersSuccessAction, 
         getLearnerAnswersErrorAction, 
         getLearnerAnswersPendingAction, 
         getLearnerAnswersSuccessAction} from './action';
import { AnswerActionsContext, 
         AnswerStateContext, 
         AnswerStateContextInitial } from './context';
import AnswerReducer from './reducer';
import { getAxiosInstance } from '@/utils/api';
import { Answer } from './interface';

interface AnswerProviderProps {
    children: React.ReactNode;
}

const AnswerProvider: React.FC<AnswerProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AnswerReducer, AnswerStateContextInitial);
    const { authRes } = useAuthState();
    
    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
      }, [authRes]);

    const GetLearnerAnswers = async (AnswerId:any) => {
        try {
            dispatch(getLearnerAnswersPendingAction());
            instance.get(`/Answer/GetByLearnerId?Id=${AnswerId}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getLearnerAnswersSuccessAction(resp?.result));
                } else {
                    message.error("Answer not fetched")
                    dispatch(getLearnerAnswersErrorAction())
                }
            })
        } catch (error) {
            message.error("Answer not fetched")
            dispatch(getLearnerAnswersErrorAction())
        }
    }
    const AddLearnerAnswer = async (skills: Answer) =>{
        try {
            dispatch(addLearnerAnswersPendingAction());
            instance.post('/LearnerSkills/CreateLearnerSkills',skills)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    // console.log("returned faculties",resp?.result)
                    dispatch(addLearnerAnswersSuccessAction(resp?.result));
                } else {
                   dispatch(addLearnerAnswersErrorAction())
                }
            })
        } catch(error){
            message.error("Faculties not fetched")
            dispatch(addLearnerAnswersErrorAction())
        }
    }

    return (
        <AnswerStateContext.Provider value={state}>
            <AnswerActionsContext.Provider value={{ GetLearnerAnswers,AddLearnerAnswer}}>
                {children}
            </AnswerActionsContext.Provider>
        </AnswerStateContext.Provider>
    );
}
const useAnswerState = () => {
    const context = useContext(AnswerStateContext);
    if (!context) {
        throw new Error('useAnswerState must be used within an AnswerProvider');
    }
    return context;
};
const useAnswerActions = () => {
    const context = useContext(AnswerActionsContext);
    if (!context) {
        throw new Error('useAnswerState must be used within an AnswerProvider');
    }
    return context;
};

export { AnswerProvider, useAnswerActions, useAnswerState };
