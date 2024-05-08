import { Course, CourseState } from "../CourseProvider/interface";

export interface SavedCourse{
    id?: string,
    learnerId: string,
    courseId:string
}
export interface SavedCourseState {
    savedCourses?: SavedCourse;
    returnedCourses?: Course[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}
export interface SavedCourseActions {
    AddCourse: (savedDetails: SavedCourse) => void;
    GetCourses: (learner: string)=> Promise<any>;
}
export interface SavedCourseAction{
    type: string,
    payload?: {
        id?: string,
        learnerId: string,
        courseId:string
    } 
}
export interface GetCourses{
    type: string;
    payload?: CourseState[];
}