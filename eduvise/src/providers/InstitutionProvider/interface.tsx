export interface Institution {
    name : string,
    description : string,
    accreditation : string,
    ranking : string,
    passRate : number,
    address :string,
    openingDate : string,
    closingDate : string,
    programmesLink : string,
    yearbookLink : string,
    applicationLink : string,
}

export interface InstitutionState {
    institution?: Institution;
    institutions?: Institution[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface InstitutionActions {
    GetInstitution: (InstitutionId: string) => void;
    GetAllInstitutions: () => Promise<any>;
    DeleteInstitution: (id: string) => void;
}
export interface InstitutionAction{
    type: string,
    payload?: {
        name : string,
        description : string,
        accreditation : string,
        ranking : string,
        passRate : number,
        address :string,
        openingDate : string,
        closingDate : string,
        programmesLink : string,
        yearbookLink : string,
        applicationLink : string,
    } 
}

export interface GetInstitution{
    type: string;
    payload: InstitutionState[];
}
export interface GetAllInstitutions{
    type: string;
    payload?: InstitutionState[];
}