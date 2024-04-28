import { createContext } from 'react';
import { Funding, FundingActions, FundingState} from './interface';

export const INITIAL_INSTITUTION: Funding = {
    Name : '',
    Description : '',
    InstitutionCriteria :'',
    FacultyCriteria : '',
    AnnualAmount : 0,
    Duration : 0,
    OpeningDate : new Date,
    ClosingDate : new Date,
    FundingLink : new Date,
}

export const FundingStateContextInitial: FundingState = {
    institution: INITIAL_INSTITUTION,
    institutions: [],
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
