export interface LearnerInfo {
    name: string,
    surname: string,
    birthDate: string,
    emailAddress: string,
    phoneNumber: number,
    password: string,
    id: string
}
export interface LearnerInfoState {
    info?: LearnerInfo;
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}
export interface LearnerInfoActions {
    GetLearnerInfo: ()=> Promise<any>;
    UpdateLearnerInfo: (info: LearnerInfo)=> void;
}
export interface LearnerInfoAction{
    type: string,
    payload?: {
        name: string,
        surname: string,
        birthDate: string,
        emailAddress: string,
        phoneNumber: number,
        password: string,
        id: string
    } 
}
export interface GetLearnerInfo{
    type: string;
    payload: LearnerInfoState[];
}
