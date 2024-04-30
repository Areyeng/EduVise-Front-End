"use client";

import { message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useContext, useMemo, useReducer } from 'react';
import { AuthActionContext, AuthStateContext, IAuthReq, INITIAL_STATE } from './context';
import { Details } from './interface';
import userReducer from './reducer';
import { getAxiosInstance, postData } from '@/utils/api';
import { loginErrorAction, loginRequestAction, loginSuccessAction } from './action';

interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps>=({ children })=>{
    const [state,dispatch] = useReducer(userReducer, INITIAL_STATE);
   
    const { push } = useRouter();
    const instance = useMemo(() => {
      const accessToken = state.authRes?.accessToken;
      if (accessToken) {
        return getAxiosInstance(accessToken)
      }
      return getAxiosInstance("");
    }, [state.authRes]);
   
    const _login = async (details: Details) => {
      const endpoint = process.env.NEXT_PUBLIC_API_LOGIN_URL + 'TokenAuth/Authenticate';
      try{
          console.log("login called...")
        const response = await postData(endpoint, details);
        if(response.status==200){
            message.error("Successfully logged in");
            dispatch({type: "LogIn",payload:response.data.result.accessToken})
            localStorage.setItem('token',response.data.result.accessToken)
            localStorage.setItem('userID',response.data.result.userId)
            localStorage.setItem('email',details.userNameOrEmailAddress)
            push('/explore');
        }
        else{
            message.error("Failed to log in");
        }
      } catch(error){
              console.log("Error");
      }
    }
  const login = (details: IAuthReq) => {
    const endpoint = process.env.NEXT_PUBLIC_API_LOGIN_URL + 'TokenAuth/Authenticate';
    try {
      dispatch(loginRequestAction());
      instance.post(endpoint, details)
        .then(res => res.data)
        .then((resp) => {
        if (resp?.success) {
            message.success("Logged in succesfully");
            dispatch(loginSuccessAction(resp?.result));
            localStorage.setItem('token', resp?.result.accessToken);
            push('/explore');
        } else {
            dispatch(loginErrorAction())
        }
      })
    } catch (error) {
      message.error("learner not added")
      dispatch(loginErrorAction())
    }
  }
  const logout = () => {
          localStorage.removeItem('token');
          dispatch({type: "LogOut"})
          if(localStorage.getItem('token') === null) {
              push('/login')
          }
          else
          {
            message.error('An error occurred while logging out');
          }
       
    };

      return (
        <AuthStateContext.Provider value={state}>
            <AuthActionContext.Provider value={{ login, logout}}>
              {children}
            </AuthActionContext.Provider>
         </AuthStateContext.Provider>
      );


}
const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuthState must be used within an AuthProvider');
  }
  return context;
};
 
const useAuthActions = () => {
  const context = useContext(AuthActionContext);
  if (!context) {
    throw new Error('useAuthActions must be used within an AuthProvider');
  }
  return context;
};
 
export { AuthProvider, AuthStateContext, useAuthActions, useAuthState };
 