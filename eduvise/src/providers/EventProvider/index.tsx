"use client";

import { getAxiosInstance } from '@/utils/api';
import { message } from 'antd';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import {
    deleteEventErrorAction,
    deleteEventPendingAction,
    deleteEventSuccessAction,
    getAllEventsErrorAction,
    getAllEventsPendingAction,
    getAllEventsSuccessAction,
    getEventErrorAction,
    getEventPendingAction,
    getEventSuccessAction
} from './action';
import { EventActionsContext, EventStateContext, EventStateContextInitial } from './context';
import eventReducer from './reducer';

interface EventProviderProps {
    children: React.ReactNode;
}

const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(eventReducer, EventStateContextInitial);
    const { authRes } = useAuthState();

    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
    }, [authRes]);

    const GetEvent = async (EventId:any) => {
        try {
            dispatch(getEventPendingAction());
            instance.get(`/Event/GetByEventID?Id=${EventId}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getEventSuccessAction(resp?.result));
                } else {
                    message.error("Event not fetched")
                    dispatch(getEventErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Event not fetched")//API not running,Axios suddenly faulty
            dispatch(getEventErrorAction())
        }
    }
    
    const GetAllEvents = async () => {
        try {
            dispatch(getAllEventsPendingAction());
            instance.get('/Event/GetAllEvents')
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getAllEventsSuccessAction(resp?.result));
                } else {
                    dispatch(getAllEventsErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Events not fetched")//API not running,Axios suddenly faulty
            dispatch(getAllEventsErrorAction())
        }
    }
    const GetAllEventsByClosing = async () => {
        try {
            dispatch(getAllEventsPendingAction());
            instance.get('/Event/GetAllEventsByClosing')
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getAllEventsSuccessAction(resp?.result));
                } else {
                    dispatch(getAllEventsErrorAction())//If it didn't follow endpoint policies 
                }
            })
        } catch (error) {
            message.error("Events not fetched")//API not running,Axios suddenly faulty
            dispatch(getAllEventsErrorAction())
        }
    }
    const DeleteEvent = async (id:string) => {
        try {
            dispatch(deleteEventPendingAction());
            instance.delete(`/Event/Delete?Id=${id}`)
                .then(res => res.data)
                .then((resp) => {
                    if (resp?.success) {
                        message.success("Deleted Events succesfully");
                        dispatch(deleteEventSuccessAction());
                    } else {
                        dispatch(deleteEventErrorAction()) 
                    }
                });
        } catch (error) {
            message.error("Event not deleted");
        }
    }
    return (
        <EventStateContext.Provider value={state}>
            <EventActionsContext.Provider value={{ GetEvent, GetAllEvents,GetAllEventsByClosing, DeleteEvent}}>
                {children}
            </EventActionsContext.Provider>
        </EventStateContext.Provider>
    );
}
const useEventState = () => {
    const context = useContext(EventStateContext);
    if (!context) {
        throw new Error('useEventState must be used within an EventProvider');
    }
    return context;
};
const useEventActions = () => {
    const context = useContext(EventActionsContext);
    if (!context) {
        throw new Error('useEventState must be used within an EventProvider');
    }
    return context;
};

export { EventProvider, useEventActions, useEventState };

