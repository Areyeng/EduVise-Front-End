export interface AuthState{
    isAuthenticated: boolean,
    authToken: string | null,
}
export interface AuthActions {
    login: (details: Details) => void,
    logout: ()=>void;
    
}
export interface Details{
   userNameOrEmailAddress: string,
   password: string

}
export interface Action{
    type: string,
    payload?: string; 
}