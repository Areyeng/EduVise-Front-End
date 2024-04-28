export interface Funding {
    Name : string,
    Description : string,
    InstitutionCriteria :string,
    FacultyCriteria : string,
    AnnualAmount : number,
    Duration : number,
    OpeningDate : Date,
    ClosingDate : Date,
    FundingLink : Date,
}

export interface FundingState {
    institution?: Funding;
    institutions?: Funding[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface FundingActions {
    GetFunding: (FundingId: string) => void;
    GetAllFundings: () => Promise<any>;
    DeleteFunding: (id: string) => void;
}
export interface FundingAction{
    type: string,
    payload?: {
        Name : string,
        Description : string,
        InstitutionCriteria :string,
        FacultyCriteria : string,
        AnnualAmount : number,
        Duration : number,
        OpeningDate : Date,
        ClosingDate : Date,
        FundingLink : Date,
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