import { createContext } from 'react';
import { Register, RegisterActions, RegisterState,} from './interface';

export const INITIAL_INSTITUTION: Register = {
    name : '',
    surname : '',
    birthDate : '',
    emailAddress : '',
    phoneNumber : '',
    password: '',
    id: ''
}

export const RegisterStateContextInitial: RegisterState = {
    userDetails: INITIAL_INSTITUTION,
    isPending: false,
    isSuccess: false,
    isError: false
}
export const RegisterActionsDefault =  {
    Register: (userDetails:Register) => {}
}

export const RegisterActionsContext = createContext<RegisterActions>(RegisterActionsDefault);
export const RegisterStateContext = createContext(RegisterStateContextInitial);

