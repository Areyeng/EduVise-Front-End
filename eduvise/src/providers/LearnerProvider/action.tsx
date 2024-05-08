import { createAction } from "redux-actions";
import { LearnerInfo } from "./interface";

export enum InfoActionEnums {
    
    GetLearnerInfoPending = "GetInfoRequest",
    GetLearnerInfoSuccess = "GetInfoSuccess",
    GetLearnerInfoError = "GetInfoError",

    UpdateLearnerInfoPending = "UpdateLearnerInfoPending",
    UpdateLearnerInfoSuccess = "UpdateLearnerInfoSuccess",
    UpdateLearnerInfoError = "UpdateLearnerInfoError",
}

export const getInfoPendingAction = createAction(
    InfoActionEnums.GetLearnerInfoPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getInfoSuccessAction = createAction(
    InfoActionEnums.GetLearnerInfoSuccess,
    (info: LearnerInfo) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        info
    })
);
export const getInfoErrorAction = createAction(
    InfoActionEnums.GetLearnerInfoError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);

export const updateInfoPendingAction = createAction(
    InfoActionEnums.UpdateLearnerInfoPending,
    // Payload creator returns payload of the action 
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const updateInfoSuccessAction = createAction(
    InfoActionEnums.UpdateLearnerInfoSuccess,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: true,
        isError: false
    })
);
export const updateInfoErrorAction = createAction(
    InfoActionEnums.UpdateLearnerInfoError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);