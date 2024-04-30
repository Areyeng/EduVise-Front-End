
import {createContext } from 'react'
import { Course, CourseActions, CourseState} from './interface';

export const INITIAL_INSTITUTION: Course = {
    Name : '',
    Description : '',
    InstitutionCriteria :'',
    FacultyCriteria : '',
    AnnualAmount : 0,
    Duration : 0,
    OpeningDate : new Date,
    ClosingDate : new Date,
    CourseLink : new Date,
}

export const CourseStateContextInitial: CourseState = {
    institution: INITIAL_INSTITUTION,
    institutions: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const CourseActionsDefault =  {
    GetCourse: (CourseId: string) => {},
    GetAllCourses: async () => Promise<any>,
    DeleteCourse: (id: string) => {},
}

export const CourseStateContext = createContext(CourseStateContextInitial);
export const CourseActionsContext = createContext<CourseActions>(CourseActionsDefault);
