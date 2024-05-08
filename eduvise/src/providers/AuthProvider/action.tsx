import { createAction } from "redux-actions";
import { IAuthRes, IAuthStateContext } from "./context";

export enum AuthActionEnums {
    LoginRequest = "LogInRequest",
    LoginSuccess = "LogInsuccess",
    LoginError = "LogInError",

    LogoutRequest = "LogoutRequest",
    LogoutSuccess = "LogoutSuccess",
    LogoutError = "LogoutError",

    GetLearnerInfoPending = "GetInfoRequest",
    GetLearnerInfoSuccess = "GetInfoSuccess",
    GetLearnerInfoError = "GetInfoError",
}

export const loginRequestAction = createAction<IAuthStateContext>(
    AuthActionEnums.LoginRequest,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
        authRes: undefined
    })
);
export const loginSuccessAction = createAction<IAuthStateContext, IAuthRes>(
    AuthActionEnums.LoginRequest,
    (authRes: IAuthRes) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        authRes
    })
);
export const loginErrorAction = createAction<IAuthStateContext>(
    AuthActionEnums.LoginRequest,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
        authRes: undefined
    })
);

export const logoutRequestAction = createAction<IAuthStateContext>(
    AuthActionEnums.LogoutRequest,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
        authRes: undefined
    })
);
export const logoutSuccessAction = createAction<IAuthStateContext>(
    AuthActionEnums.LogoutSuccess,
    () => ({
        isPending: false,
        isSuccess: true,
        isError: false,
    })
);
export const logoutErrorAction = createAction<IAuthStateContext>(
    AuthActionEnums.LogoutError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
        authRes: undefined
    })
);
