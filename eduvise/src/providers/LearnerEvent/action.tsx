
import { createAction } from "redux-actions";
import { SavedEvent } from "./interface";
import {  Event } from "../EventProvider/interface";


export enum SavedEventActionTypes {
    AddEventPending = "AddEventPending",
    AddEventSuccess = "AddEventSuccess",
    AddEventError = "AddEventError",

    GetEventPending = "GetEventPending",
    GetEventSuccess = "GetEventSuccess",
    GetEventError = "GetEventError"
}
export const addEventPendingAction = createAction(
    SavedEventActionTypes.AddEventPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const addEventSuccessAction = createAction(
    SavedEventActionTypes.AddEventSuccess,
    // Payload creator returns payload of the action 
    (savedEvent: SavedEvent) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        savedEvent
    })
);
export const addEventErrorAction = createAction(
    SavedEventActionTypes.AddEventError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
export const getEventPendingAction = createAction(
    SavedEventActionTypes.GetEventPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getEventSuccessAction = createAction(
    SavedEventActionTypes.GetEventSuccess,
    // Payload creator returns payload of the action 
    (returnedEvents: Event[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        returnedEvents
    })
);
export const getEventErrorAction = createAction(
    SavedEventActionTypes.GetEventError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);