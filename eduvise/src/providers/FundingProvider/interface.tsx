export interface Funding {
    name : string,
    description : string,
    institutionCriteria :string,
    facultyCriteria : string,
    markCriteria: string,
    annualAmount : number,
    duration : number,
    openingDate : string,
    closingDate : string,
    fundingLink : string,
    id: string,
}

export interface FundingState {
    funding?: Funding;
    fundings?: Funding[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface FundingActions {
    GetFunding: (FundingId: string) => void;
    GetAllFundings: () => Promise<any>;
    GetAllFundingsByClosing: () => Promise<any>;
    DeleteFunding: (id: string) => void;
}
export interface FundingAction{
    type: string,
    payload?: {
        name : string,
        description : string,
        institutionCriteria :string,
        facultyCriteria : string,
        markCriteria: string,
        annualAmount : number,
        duration : number,
        openingDate : string,
        closingDate : string,
        fundingLink : string,
        id: string,
    } 
}

export interface GetFunding{
    type: string;
    payload: FundingState[];
}
export interface GetAllFundings{
    type: string;
    payload?: FundingState[];
}
export interface GetAllFundingsByClosing{
    type: string;
    payload?: FundingState[];
}
