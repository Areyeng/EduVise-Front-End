"use client";

import { message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useContext, useMemo, useReducer } from 'react';
import { AuthActionContext, AuthStateContext, IAuthReq, INITIAL_STATE } from './context';
import { Details } from './interface';
import userReducer from './reducer';
import { getAxiosInstance, postData } from '@/utils/api';
import { loginErrorAction, loginRequestAction, loginSuccessAction, logoutErrorAction, logoutRequestAction, logoutSuccessAction } from './action';
import { useLearnerInfoActions } from '../LearnerProvider';
import { InfoActionsContext } from '../LearnerProvider/context';

interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps>=({ children })=>{
    const [state,dispatch] = useReducer(userReducer, INITIAL_STATE);
    const { GetLearnerInfo } = useContext(InfoActionsContext);
    const { push } = useRouter();

    const instance = useMemo(() => {
      const accessToken = state.authRes?.accessToken;
      if (accessToken) {
        return getAxiosInstance(accessToken)
      }
      return getAxiosInstance("");
    }, [state.authRes]);
   
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
              localStorage.setItem('email',details.userNameOrEmailAddress);
              GetLearnerInfo();
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
          const auth=localStorage.getItem('token');
         
          dispatch(logoutRequestAction());
          if(localStorage.getItem('token') === null) {
              dispatch(logoutSuccessAction());
              push('/login')
          }
          else
          {
            dispatch(logoutErrorAction())
            message.error('An error occurred while logging out');
          }
   
    };
   

      return (
        <AuthStateContext.Provider value={state}>
            <AuthActionContext.Provider value={{ login,logout}}>
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
 