
import { createAction } from "redux-actions";
import { Funding } from "./interface";

export enum FundingActionTypes {

    GetFundingPending = "GetFundingPending",
    GetFundingSuccess = "GetFundingSuccess",
    GetFundingError = "GetFundingError",

    GetAllFundingsPending = "GetAllFundingsPending",
    GetAllFundingsSuccess = "GetAllFundingsSuccess",
    GetAllFundingsError = "GetAllFundingsError",

    DeleteFundingPending = "DeleteFundingPending",   
    DeleteFundingSuccess = "DeleteFundingSuccess", 
    DeleteFundingError = "DeleteFundingError",

}

export const getFundingPendingAction = createAction(
    FundingActionTypes.GetFundingPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getFundingSuccessAction = createAction(
    FundingActionTypes.GetFundingSuccess,
    (newFunding: Funding) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        newFunding
    })
);
export const getFundingErrorAction = createAction(
    FundingActionTypes.GetFundingError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);

export const getAllFundingsPendingAction = createAction(
    FundingActionTypes.GetAllFundingsPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getAllFundingsSuccessAction = createAction(
    FundingActionTypes.GetAllFundingsSuccess, 
    (Fundings: Funding[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        Fundings
    })
);
export const getAllFundingsErrorAction = createAction(
    FundingActionTypes.GetAllFundingsError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//
export const deleteFundingPendingAction = createAction(
    FundingActionTypes.DeleteFundingPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const deleteFundingSuccessAction = createAction(
    FundingActionTypes.DeleteFundingSuccess,
    () => ({
        isPending: false,
        isSuccess: true,
        isError: false
    })
);
export const deleteFundingErrorAction = createAction(
    FundingActionTypes.DeleteFundingError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);

