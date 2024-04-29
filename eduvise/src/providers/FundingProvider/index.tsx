"use client";
import React, { useContext, useReducer } from 'react';
import fundingReducer from './reducer';
import axios from 'axios';
import { Funding, FundingAction, FundingState } from './interface';
import { message } from 'antd';
import { deleteData, getData, postData} from '@/utils/api';
import { FundingActionsContext, FundingStateContext, FundingStateContextInitial } from './context';
import { getFundingPendingAction,getFundingSuccessAction,getFundingErrorAction,getAllFundingsErrorAction,getAllFundingsPendingAction,getAllFundingsSuccessAction,deleteFundingErrorAction, deleteFundingPendingAction, deleteFundingSuccessAction } from './action';
import {  } from '../FundingProvider/action';


interface FundingProviderProps {
    children: React.ReactNode;
}

export function getAxiosInstance (accessToken: string | null){
    const baseUrl=process.env.NEXT_PUBLIC_API_URL;
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      return instance;
}

const FundingProvider: React.FC<FundingProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(fundingReducer, FundingStateContextInitial);

    const GetFunding = async (FundingId:any) => {
        try {
            dispatch(getFundingPendingAction());
            getData(`/Funding/GetByFundingId?Id=${FundingId}`)
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
            getData('/Funding/GetAllFundings')
                .then((resp) => {
                if (resp?.success) {
                   dispatch(getAllFundingsSuccessAction(resp?.result));
                } else {
                   dispatch(getAllFundingsErrorAction())
                }
            })
        } catch (error) {
            message.error("Fundings not fetched")
            dispatch(getAllFundingsErrorAction())
        }
    }
    const DeleteFunding = async (id:string) => {
        try {
            dispatch(deleteFundingPendingAction());
            deleteData(`/Funding/Delete?Id=${id}`).then((resp) => {
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

export { FundingProvider, useFundingState, useFundingActions };