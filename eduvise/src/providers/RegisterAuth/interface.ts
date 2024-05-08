export interface Register {
    name : string,
    surname : string,
    birthDate : string,
    emailAddress : string,
    phoneNumber : string,
    password: string,
    id: string
}

export interface RegisterState {
    userDetails? : Register;
    isPending? : boolean;
    isSuccess? : boolean;
    isError? : boolean;
}

export interface RegisterActions {
    Register: (userDetails:Register)=> void
}
export interface RegisterAction{
    type: string,
    payload?: {
        name : string,
        surname : string,
        birthDate : string,
        emailAddress : string,
        phoneNumber : string,
        password: string,
        id: string,
    } 
}