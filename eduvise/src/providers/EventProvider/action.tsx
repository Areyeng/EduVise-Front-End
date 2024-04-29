
import { createAction } from "redux-actions";
import { Event } from "./interface";

export enum EventActionTypes {

    GetEventPending = "GetEventPending",
    GetEventSuccess = "GetEventSuccess",
    GetEventError = "GetEventError",

    GetAllEventsPending = "GetAllEventsPending",
    GetAllEventsSuccess = "GetAllEventsSuccess",
    GetAllEventsError = "GetAllEventsError",

    DeleteEventPending = "DeleteEventPending",   
    DeleteEventSuccess = "DeleteEventSuccess", 
    DeleteEventError = "DeleteEventError", 
    
}

export const getEventPendingAction = createAction(
    EventActionTypes.GetEventPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getEventSuccessAction = createAction(
    EventActionTypes.GetEventSuccess,
    (event: Event) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        event
    })
);
export const getEventErrorAction = createAction(
    EventActionTypes.GetEventError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//
export const getAllEventsPendingAction = createAction(
    EventActionTypes.GetAllEventsPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getAllEventsSuccessAction = createAction(
    EventActionTypes.GetAllEventsSuccess,
    (events: Event[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        events
    })
);
export const getAllEventsErrorAction = createAction(
    EventActionTypes.GetAllEventsError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//
export const deleteEventPendingAction = createAction(
    EventActionTypes.DeleteEventPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const deleteEventSuccessAction = createAction(
    EventActionTypes.DeleteEventSuccess,
    () => ({
        isPending: false,
        isSuccess: true,
        isError: false
    })
);
export const deleteEventErrorAction = createAction(
    EventActionTypes.DeleteEventError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
