
import { createAction } from "redux-actions";
import { SavedCourse } from "./interface";
import {  Course } from "../CourseProvider/interface";


export enum SavedCourseActionTypes {
    AddCoursePending = "AddCoursePending",
    AddCourseSuccess = "AddCourseSuccess",
    AddCourseError = "AddCourseError",

    GetCoursePending = "GetCoursePending",
    GetCourseSuccess = "GetCourseSuccess",
    GetCourseError = "GetCourseError"
}
export const addCoursePendingAction = createAction(
    SavedCourseActionTypes.AddCoursePending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const addCourseSuccessAction = createAction(
    SavedCourseActionTypes.AddCourseSuccess,
    // Payload creator returns payload of the action 
    (savedCourse: SavedCourse) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        savedCourse
    })
);
export const addCourseErrorAction = createAction(
    SavedCourseActionTypes.AddCourseError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
export const getCoursePendingAction = createAction(
    SavedCourseActionTypes.GetCoursePending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getCourseSuccessAction = createAction(
    SavedCourseActionTypes.GetCourseSuccess,
    // Payload creator returns payload of the action 
    (returnedCourses: Course[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        returnedCourses
    })
);
export const getCourseErrorAction = createAction(
    SavedCourseActionTypes.GetCourseError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);