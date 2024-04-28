
import { createAction } from "redux-actions";
import { Faculty } from "./interface";

export enum FacultyActionTypes {

    GetFacultiesPending = "GetFacultiesPending",
    GetFacultiesSuccess = "GetFacultiesSuccess",
    GetFacultiesError = "GetFacultiesError",

    GetAllFacultiesPending = "GetAllFacultiesPending",
    GetAllFacultiesSuccess = "GetAllFacultiesSuccess",
    GetAllFacultiesError = "GetAllFacultiessError",

    DeleteFacultyPending = "DeleteFacultyPending",   
    DeleteFacultySuccess = "DeleteFacultySuccess", 
    DeleteFacultyError = "DeleteFacultyError",

}

export const getFacultyPendingAction = createAction(
    FacultyActionTypes.GetFacultiesPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getFacultySuccessAction = createAction(
    FacultyActionTypes.GetFacultiesSuccess,
    (newFaculties: Faculty) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        newFaculties
    })
);
export const getFacultyErrorAction = createAction(
    FacultyActionTypes.GetFacultiesError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);

export const getAllFacultiesPendingAction = createAction(
    FacultyActionTypes.GetAllFacultiesPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getAllFacultiesSuccessAction = createAction(
    FacultyActionTypes.GetAllFacultiesSuccess, 
    (Facultiess: Faculty[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        Facultiess
    })
);
export const getAllFacultiesErrorAction = createAction(
    FacultyActionTypes.GetAllFacultiesError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//
export const deleteFacultyPendingAction = createAction(
    FacultyActionTypes.DeleteFacultyPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const deleteFacultySuccessAction = createAction(
    FacultyActionTypes.DeleteFacultySuccess,
    () => ({
        isPending: false,
        isSuccess: true,
        isError: false
    })
);
export const deleteFacultyErrorAction = createAction(
    FacultyActionTypes.DeleteFacultyError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);

