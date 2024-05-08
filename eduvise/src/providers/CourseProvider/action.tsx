
import { createAction } from "redux-actions";
import { Course } from "./interface";

export enum CourseActionTypes {

    GetCoursePending = "GetCoursePending",
    GetCourseSuccess = "GetCourseSuccess",
    GetCourseError = "GetCourseError",

    GetAllCoursesPending = "GetAllCoursesPending",
    GetAllCoursesSuccess = "GetAllCoursesSuccess",
    GetAllCoursesError = "GetAllCoursesError",

    GetCoursesByFacultyPending = "GetCoursesByFacultyPending",
    GetCoursesByFacultySuccess = "GetCoursesByFacultyIdSuccess",
    GetCoursesByFacultyError= "GetCoursesByFacultyIdError",

    DeleteCoursePending = "DeleteCoursePending",   
    DeleteCourseSuccess = "DeleteCourseSuccess", 
    DeleteCourseError = "DeleteCourseError", 
    
}
export const getCoursePendingAction = createAction(
    CourseActionTypes.GetCoursePending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getCourseSuccessAction = createAction(
    CourseActionTypes.GetCourseSuccess,
    (course: Course) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        course
    })
);
export const getCourseErrorAction = createAction(
    CourseActionTypes.GetCourseError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//
export const getAllCoursesPendingAction = createAction(
    CourseActionTypes.GetAllCoursesPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getAllCoursesSuccessAction = createAction(
    CourseActionTypes.GetAllCoursesSuccess,
    (courses: Course[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        courses
    })
);
export const getAllCoursesErrorAction = createAction(
    CourseActionTypes.GetAllCoursesError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//by faculty
export const getAllCoursesByFacultyPendingAction = createAction(
    CourseActionTypes.GetCoursesByFacultyPending, 
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getAllCoursesByFacultySuccessAction = createAction(
    CourseActionTypes.GetCoursesByFacultySuccess,
    (courses: Course[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        courses
    })
);
export const getAllCoursesByFacultyErrorAction = createAction(
    CourseActionTypes.GetCoursesByFacultyError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
