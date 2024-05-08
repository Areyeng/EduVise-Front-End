
import {createContext } from 'react'
import { Course, CourseActions, CourseState} from './interface';

export const INITIAL_COURSE: Course = {
    name : '',
    description : '',
    facultyName : '',
    jobTitles : '',
    avgAPS : 0,
    avgDuration : '',
    avgTuition :'',
    facultyId : '',
    id: ''
}

export const CourseStateContextInitial: CourseState = {
    course: INITIAL_COURSE,
    courses: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const CourseActionsDefault =  {
    GetCourse: (CourseId: string) => {},
    GetAllCourses: async () => Promise<any>,
    GetCoursesByFacultyId:(FacultyId: string)=> Promise<any>,
}

export const CourseStateContext = createContext(CourseStateContextInitial);
export const CourseActionsContext = createContext<CourseActions>(CourseActionsDefault);
