
import { createAction } from "redux-actions";
import { Course } from "./interface";

export enum CourseActionTypes {

    GetCoursePending = "GetCoursePending",
    GetCourseSuccess = "GetCourseSuccess",
    GetCourseError = "GetCourseError",

    GetAllCoursesPending = "GetAllCoursesPending",
    GetAllCoursesSuccess = "GetAllCoursesSuccess",
    GetAllCoursesError = "GetAllCoursesError",

    DeleteCoursePending = "DeleteCoursePending",   
    DeleteCourseSuccess = "DeleteCourseSuccess", 
    DeleteCourseError = "DeleteCourseError", 
    
}
export const getCoursePendingAction = createAction(
    CourseActionTypes.GetCoursePending,
    // Payload creator returns payload of the action 
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getCourseSuccessAction = createAction(
    CourseActionTypes.GetCourseSuccess,
    // Payload creator returns payload of the action 
    (newCourse: Course) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        newCourse
    })
);
export const getCourseErrorAction = createAction(
    CourseActionTypes.GetCourseError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
//
export const getAllCoursesPendingAction = createAction(
    CourseActionTypes.GetAllCoursesPending,
    // Payload creator returns payload of the action 
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getAllCoursesSuccessAction = createAction(
    CourseActionTypes.GetAllCoursesSuccess,
    // Payload creator returns payload of the action 
    (Courses: Course[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        Courses
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
//
export const deleteCoursePendingAction = createAction(
    CourseActionTypes.DeleteCoursePending,
    // Payload creator returns payload of the action 
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const deleteCourseSuccessAction = createAction(
    CourseActionTypes.DeleteCourseSuccess,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: true,
        isError: false
    })
);
export const deleteCourseErrorAction = createAction(
    CourseActionTypes.DeleteCourseError,
    // Payload creator returns payload of the action 
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
