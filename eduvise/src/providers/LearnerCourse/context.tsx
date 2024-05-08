import { createContext } from 'react';
import { SavedCourse, SavedCourseActions, SavedCourseState} from './interface';

export const INITIAL_SAVED: SavedCourse = {
    id : '',
    learnerId : '',
    courseId : ''
}
export const SavedStateContextInitial: SavedCourseState = {
    savedCourses: INITIAL_SAVED,
    returnedCourses: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}
export const SavedActionsDefault = {
    AddCourse: (savedDetails: SavedCourse) => {},
    GetCourses: (learner: string)=> Promise<any>
}
export const SavedCourseStateContext = createContext(SavedStateContextInitial);
export const SavedCourseActionsContext = createContext<SavedCourseActions>(SavedActionsDefault);