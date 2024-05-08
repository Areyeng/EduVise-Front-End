import { Funding, FundingState } from "../FundingProvider/interface";

export interface SavedFunding{
    id?: string,
    learnerId: string,
    fundingId:string
}
export interface SavedFundingState {
    savedFundings?: SavedFunding;
    returnedFundings?: Funding[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}
export interface SavedFundingActions {
    AddFunding: (savedDetails: SavedFunding) => void;
    GetFundings: (learner: string)=> Promise<any>;
}
export interface SavedFundingAction{
    type: string,
    payload?: {
        id?: string,
        learnerId: string,
        fundingId:string
    } 
}
export interface GetFundings{
    type: string;
    payload?: FundingState[];
}