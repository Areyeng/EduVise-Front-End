"use client";

import { message } from 'antd';
import axios from 'axios';
import React, { useContext, useMemo, useReducer } from 'react';
import { useAuthState } from '../AuthProvider';
import { } from '../FundingProvider/action';
import { deleteFundingErrorAction, deleteFundingPendingAction, deleteFundingSuccessAction, getAllFundingsErrorAction, getAllFundingsPendingAction, getAllFundingsSuccessAction, getFundingErrorAction, getFundingPendingAction, getFundingSuccessAction } from './action';
import { FundingActionsContext, FundingStateContext, FundingStateContextInitial } from './context';
import fundingReducer from './reducer';
import { getAxiosInstance } from '@/utils/api';

interface FundingProviderProps {
    children: React.ReactNode;
}

const FundingProvider: React.FC<FundingProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(fundingReducer, FundingStateContextInitial);
    const { authRes } = useAuthState();
    
    const instance = useMemo(() => {
        const accessToken = authRes?.accessToken;
        if (accessToken) {
          return getAxiosInstance(accessToken)
        }
        return getAxiosInstance("");
      }, [authRes]);

    const GetFunding = async (FundingId:any) => {
        try {
            dispatch(getFundingPendingAction());
            instance.get(`/Funding/GetByFundingId?Id=${FundingId}`)
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                    dispatch(getFundingSuccessAction(resp?.result));
                } else {
                    message.error("Funding not fetched")
                    dispatch(getFundingErrorAction())
                }
            })
        } catch (error) {
            message.error("Funding not fetched")
            dispatch(getFundingErrorAction())
        }
    }
    
    const GetAllFundings = async () => {
        try {
            dispatch(getAllFundingsPendingAction());
            instance.get('/Funding/GetAllFundings')
                .then(res => res.data)
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getAllFundingsSuccessAction(resp?.result));
                } else {
                   dispatch(getAllFundingsErrorAction())
                }
            });
        } catch (error) {
            message.error("Fundings not fetched")
            dispatch(getAllFundingsErrorAction())
        }
    }
    const DeleteFunding = async (id:string) => {
        try {
            dispatch(deleteFundingPendingAction());
            instance.delete(`/Funding/Delete?Id=${id}`)
                .then(res => res.data)
                .then((resp) => {
                    if (resp?.success) {
                        message.success("Deleted Fundings succesfully");
                        dispatch(deleteFundingSuccessAction());
                    } else {
                        dispatch(deleteFundingErrorAction()) 
                    }
                })
        } catch (error) {
            message.error("Funding not deleted");
        }
    }
    return (
        <FundingStateContext.Provider value={state}>
            <FundingActionsContext.Provider value={{ GetFunding, GetAllFundings, DeleteFunding}}>
                {children}
            </FundingActionsContext.Provider>
        </FundingStateContext.Provider>
    );
}
const useFundingState = () => {
    const context = useContext(FundingStateContext);
    if (!context) {
        throw new Error('useFundingState must be used within an FundingProvider');
    }
    return context;
};
const useFundingActions = () => {
    const context = useContext(FundingActionsContext);
    if (!context) {
        throw new Error('useFundingState must be used within an FundingProvider');
    }
    return context;
};

export { FundingProvider, useFundingActions, useFundingState };
