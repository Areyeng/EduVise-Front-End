import { createContext } from 'react';

export interface IAuthReq {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean;
}

export interface IAuthRes {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
}

export interface IAuthStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    authRes?: IAuthRes;
}

export const INITIAL_STATE: IAuthStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
    authRes: undefined
}

export interface IAuthActionsContext {
    login: (details: IAuthReq) => void;
    logout: () => void;
}

export const AuthActionsContextDefault: IAuthActionsContext = {
    login: () => {},
    logout: () => {}
}

export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);
export const AuthActionContext = createContext<IAuthActionsContext>(AuthActionsContextDefault);
