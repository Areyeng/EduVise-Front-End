
import { createAction } from "redux-actions";
import { Institution } from "./interface";

export enum InstitutionActionTypes {

    GetInstitutionPending = "GetInstitutionPending",
    GetInstitutionSuccess = "GetInstitutionSuccess",
    GetInstitutionError = "GetInstitutionError",

    GetAllInstitutionsPending = "GetAllInstitutionsPending",
    GetAllInstitutionsSuccess = "GetAllInstitutionsSuccess",
    GetAllInstitutionsError = "GetAllInstitutionsError",

    DeleteInstitutionPending = "DeleteInstitutionPending",   
    DeleteInstitutionSuccess = "DeleteInstitutionSuccess", 
    DeleteInstitutionError = "DeleteInstitutionError",

}

export const getInstitutionPendingAction = createAction(
    InstitutionActionTypes.GetInstitutionPending,
    // Payload creator returns payload of the action 
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getInstitutionSuccessAction = createAction(
    InstitutionActionTypes.GetInstitutionSuccess,
    // Payload creator returns payload of the action 
    (newInstitution: Institution) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        newInstitution
    })
);
export const getInstitutionErrorAction = createAction(
    InstitutionActionTypes.GetInstitutionError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//
export const getAllInstitutionsPendingAction = createAction(
    InstitutionActionTypes.GetAllInstitutionsPending,
    // Payload creator returns payload of the action 
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getAllInstitutionsSuccessAction = createAction(
    InstitutionActionTypes.GetAllInstitutionsSuccess,
    // Payload creator returns payload of the action 
    (institutions: Institution[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        institutions
    })
);
export const getAllInstitutionsErrorAction = createAction(
    InstitutionActionTypes.GetAllInstitutionsError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//
export const deleteInstitutionPendingAction = createAction(
    InstitutionActionTypes.DeleteInstitutionPending,
    // Payload creator returns payload of the action 
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const deleteInstitutionSuccessAction = createAction(
    InstitutionActionTypes.DeleteInstitutionSuccess,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: true,
        isError: false
    })
);
export const deleteInstitutionErrorAction = createAction(
    InstitutionActionTypes.DeleteInstitutionError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);

