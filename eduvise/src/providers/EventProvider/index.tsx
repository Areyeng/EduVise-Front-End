"use client";
import React, { useContext, useReducer } from 'react';
import eventReducer from './reducer';
import axios from 'axios';
import { Event, EventAction, EventState } from './interface';
import { message } from 'antd';
import { deleteData, getData, postData} from '@/utils/api';
import { EventActionsContext, EventStateContextInitial } from './context';
import { EventStateContext } from './context';

import { getEventPendingAction,getEventSuccessAction,getEventErrorAction,getAllEventsErrorAction,getAllEventsPendingAction,getAllEventsSuccessAction, deleteEventPendingAction, deleteEventSuccessAction, deleteEventErrorAction } from './action';


interface EventProviderProps {
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

const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(eventReducer, EventStateContextInitial);

    const GetEvent = async (EventId:any) => {
        try {
            dispatch(getEventPendingAction());
            getData(`/Event/GetByEventID?Id=${EventId}`)
                .then((resp) => {
                if (resp?.success) {
                   message.success("Fetched Event succesfully");
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
            getData('/Event/GetAllEvents')
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
            deleteData(`/Event/Delete?Id=${id}`).then((resp) => {
                if (resp?.success) {
                    message.success("Deleted Events succesfully");
                    dispatch(deleteEventSuccessAction());
                } else {
                    dispatch(deleteEventErrorAction()) 
                }
            })

        } catch (error) {
            message.error("Event not deleted");
        }
    }
    return (
        <EventStateContext.Provider value={state}>
            <EventActionsContext.Provider value={{ GetEvent, GetAllEvents, DeleteEvent}}>
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

export { EventProvider, useEventState, useEventActions };``