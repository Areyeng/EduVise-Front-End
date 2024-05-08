import {createContext} from 'react'
import { LearnerInfo, LearnerInfoActions, LearnerInfoState } from './interface'

export const INITIAL_INFO: LearnerInfo = {
    name: '',
    surname: '',
    birthDate: '',
    emailAddress: '',
    phoneNumber: 0,
    password: '',
    id: ''
}
export const InfoStateContextInitial: LearnerInfoState = {
    info: INITIAL_INFO,
    isPending: false,
    isSuccess: false,
    isError: false

}
export const InfoActionsDefault =  {
    GetLearnerInfo: ()=> Promise<any>,
    UpdateLearnerInfo: (info: LearnerInfo)=> {},
    
}
export const InfoActionsContext = createContext<LearnerInfoActions>(InfoActionsDefault);
export const InfoStateContext = createContext(InfoStateContextInitial);