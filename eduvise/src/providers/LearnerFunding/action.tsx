
import { createAction } from "redux-actions";
import { SavedFunding } from "./interface";
import {  Funding } from "../FundingProvider/interface";


export enum SavedFundingActionTypes {
    AddFundingPending = "AddFundingPending",
    AddFundingSuccess = "AddFundingSuccess",
    AddFundingError = "AddFundingError",

    GetFundingPending = "GetFundingPending",
    GetFundingSuccess = "GetFundingSuccess",
    GetFundingError = "GetFundingError"
}
export const addFundingPendingAction = createAction(
    SavedFundingActionTypes.AddFundingPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const addFundingSuccessAction = createAction(
    SavedFundingActionTypes.AddFundingSuccess,
    // Payload creator returns payload of the action 
    (savedFunding: SavedFunding) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        savedFunding
    })
);
export const addFundingErrorAction = createAction(
    SavedFundingActionTypes.AddFundingError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
export const getFundingPendingAction = createAction(
    SavedFundingActionTypes.GetFundingPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getFundingSuccessAction = createAction(
    SavedFundingActionTypes.GetFundingSuccess,
    // Payload creator returns payload of the action 
    (returnedFundings: Funding[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        returnedFundings
    })
);
export const getFundingErrorAction = createAction(
    SavedFundingActionTypes.GetFundingError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);