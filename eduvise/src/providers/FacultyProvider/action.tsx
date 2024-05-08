
import { createAction } from "redux-actions";
import { Faculty } from "./interface";

export enum FacultyActionTypes {

    GetFacultyPending = "GetFacultiesPending",
    GetFacultySuccess = "GetFacultiesSuccess",
    GetFacultyError = "GetFacultiesError",

    GetAllFacultiesPending = "GetAllFacultiesPending",
    GetAllFacultiesSuccess = "GetAllFacultiesSuccess",
    GetAllFacultiesError = "GetAllFacultiessError",

    GetFacultiesBySkillsPending = "GetFacultiesBySkillsPending",
    GetFacultiesBySkillsSuccess = "GetFacultiesBySkillsSuccess",
    GetFacultiesBySkillsError = "GetFacultiesBySkillsError",

    DeleteFacultyPending = "DeleteFacultyPending",   
    DeleteFacultySuccess = "DeleteFacultySuccess", 
    DeleteFacultyError = "DeleteFacultyError",

}

export const getFacultyPendingAction = createAction(
    FacultyActionTypes.GetFacultyPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getFacultySuccessAction = createAction(
    FacultyActionTypes.GetFacultySuccess,
    (faculty: Faculty) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        faculty
    })
);
export const getFacultyErrorAction = createAction(
    FacultyActionTypes.GetFacultyError,
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
    (faculties: Faculty[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        faculties
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
export const getFacultiesBySkillsPendingAction = createAction(
    FacultyActionTypes.GetFacultiesBySkillsPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getFacultiesBySkillsSuccessAction = createAction(
    FacultyActionTypes.GetFacultiesBySkillsSuccess,
    (faculties: Faculty[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        faculties 
    })
);
export const getFacultiesBySkillsErrorAction = createAction(
    FacultyActionTypes.GetFacultiesBySkillsError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
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

