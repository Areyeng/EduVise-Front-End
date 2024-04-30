import { createAction } from "redux-actions";
import { IAuthRes, IAuthStateContext } from "./context";

export enum AuthActionEnums {
    LoginRequest = "LogInRequest",
    LoginSuccess = "LogInsuccess",
    LoginError = "LogInError",

    LogOut ="LogOut"
}
export const logout = createAction(AuthActionEnums.LogOut);
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