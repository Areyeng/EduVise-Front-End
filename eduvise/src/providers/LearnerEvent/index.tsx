"use client";

import { getAxiosInstance } from '@/utils/api';
import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import SavedEventReducer from './reducer';
import { SavedEventActionsContext, SavedEventStateContext, SavedStateContextInitial } from './context';
import { addEventErrorAction, addEventPendingAction, addEventSuccessAction, getEventErrorAction, getEventPendingAction, getEventSuccessAction } from './action';
import { SavedEvent } from './interface';

interface SavedEventProviderProps {
    children: React.ReactNode;
}

const SavedEventProvider: React.FC<SavedEventProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(SavedEventReducer,SavedStateContextInitial);
    const { authRes } = useAuthState();

    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);

    const AddEvent = async (savedEvent:SavedEvent) => {
        try {
            dispatch(addEventPendingAction());
            instance.post('/LearnerEvent/CreateLearnerEvent', savedEvent)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    message.success("Added Event succesfully");
                    dispatch(addEventSuccessAction(resp?.result));
                  
                } else {
                    message.error("Event not fetched")
                    dispatch(addEventErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Event not fetched")//API not running,Axios suddenly faulty
            dispatch(addEventErrorAction())
        }
    }
    const GetEvents = async (learner:string) => {
        try {
            console.log()
            dispatch(getEventPendingAction());
            instance.get(`/LearnerEvent/GetAllEventsForSpecificLearner?id=${learner}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getEventSuccessAction(resp?.result));
                } else {
                    message.error("Events not fetched")
                    dispatch(getEventErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Events not fetched")//API not running,Axios suddenly faulty
            dispatch(getEventErrorAction())
        }
    }
   
    return (
        <SavedEventStateContext.Provider value={state}>
            <SavedEventActionsContext.Provider value={{ AddEvent, GetEvents}}>
                {children}
            </SavedEventActionsContext.Provider>
        </SavedEventStateContext.Provider>
    );
}
const useSavedEventState = () => {
    const context = useContext(SavedEventStateContext);
    if (!context) {
        throw new Error('useSavedEventState must be used within an SavedEventProvider');
    }
    return context;
};
const useSavedEventActions = () => {
    const context = useContext(SavedEventActionsContext);
    if (!context) {
        throw new Error('useSavedEventState must be used within an SavedEventProvider');
    }
    return context;
};

export { SavedEventProvider, useSavedEventActions, useSavedEventState };

