import { createContext } from 'react';
import { Funding, FundingActions, FundingState} from './interface';

export const INITIAL_FUNDING: Funding = {
    name : '',
    description : '',
    institutionCriteria :'',
    facultyCriteria : '',
    annualAmount : 0,
    markCriteria: '',
    duration : 0,
    openingDate : '',
    closingDate : '',
    fundingLink :'',
    id: '',
}

export const FundingStateContextInitial: FundingState = {
    funding: INITIAL_FUNDING,
    fundings: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const FundingActionsDefault =  {
    GetFunding: (FundingId: string) => {},
    GetAllFundings: async() => Promise<any>,
    GetAllFundingsByClosing:async () => Promise<any>,
    DeleteFunding: (id: '') => {},
}

export const FundingStateContext = createContext(FundingStateContextInitial);
export const FundingActionsContext = createContext<FundingActions>(FundingActionsDefault);
