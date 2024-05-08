import { Institution, InstitutionState } from "../InstitutionProvider/interface";

export interface SavedInstitution{
    id?: string,
    learnerId: string,
    institutionId:string
}
export interface SavedInstitutionState {
    savedInstitutions?: SavedInstitution;
    returnedInstitutions?: Institution[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}
export interface SavedInstitutionActions {
    AddInstitution: (savedDetails: SavedInstitution) => void;
    GetInstitutions: (learner: string)=> Promise<any>;
}
export interface SavedInstitutionAction{
    type: string,
    payload?: {
        id?: string,
        learnerId: string,
        institutionId:string
    } 
}
export interface GetInstitutions{
    type: string;
    payload?: InstitutionState[];
}