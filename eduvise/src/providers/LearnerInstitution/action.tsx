
import { createAction } from "redux-actions";
import { SavedInstitution } from "./interface";
import {  Institution } from "../InstitutionProvider/interface";


export enum SavedInstitutionActionTypes {
    AddInstitutionPending = "AddInstitutionPending",
    AddInstitutionSuccess = "AddInstitutionSuccess",
    AddInstitutionError = "AddInstitutionError",

    GetInstitutionPending = "GetInstitutionPending",
    GetInstitutionSuccess = "GetInstitutionSuccess",
    GetInstitutionError = "GetInstitutionError"
}
export const addInstitutionPendingAction = createAction(
    SavedInstitutionActionTypes.AddInstitutionPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const addInstitutionSuccessAction = createAction(
    SavedInstitutionActionTypes.AddInstitutionSuccess,
    // Payload creator returns payload of the action 
    (savedInstitution: SavedInstitution) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        savedInstitution
    })
);
export const addInstitutionErrorAction = createAction(
    SavedInstitutionActionTypes.AddInstitutionError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
export const getInstitutionPendingAction = createAction(
    SavedInstitutionActionTypes.GetInstitutionPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getInstitutionSuccessAction = createAction(
    SavedInstitutionActionTypes.GetInstitutionSuccess,
    // Payload creator returns payload of the action 
    (returnedInstitutions: Institution[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        returnedInstitutions
    })
);
export const getInstitutionErrorAction = createAction(
    SavedInstitutionActionTypes.GetInstitutionError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);