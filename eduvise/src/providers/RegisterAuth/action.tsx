
import { createAction } from "redux-actions";
import { Register } from "./interface";

export enum RegisterActionTypes {

    RegistrationPending = "RegistrationPending",
    RegistrationSuccess = "RegistrationSuccess",
    RegistrationError = "RegistrationError",
}

export const registrationPendingAction = createAction(
    RegisterActionTypes.RegistrationPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const registrationSuccessAction = createAction(
    RegisterActionTypes.RegistrationPending,
    (userDetails: Register) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        userDetails
    })
);
export const registrationErrorAction = createAction(
    RegisterActionTypes.RegistrationError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);


