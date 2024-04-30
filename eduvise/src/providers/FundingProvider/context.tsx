import { createContext } from 'react';
import { Funding, FundingActions, FundingState} from './interface';

export const INITIAL_INSTITUTION: Funding = {
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
    funding: INITIAL_INSTITUTION,
    fundings: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const FundingActionsDefault =  {
    GetFunding: (FundingId: string) => {},
    GetAllFundings: () => Promise<any>,
    DeleteFunding: (id: '') => {},
}

export const FundingStateContext = createContext(FundingStateContextInitial);
export const FundingActionsContext = createContext<FundingActions>(FundingActionsDefault);
