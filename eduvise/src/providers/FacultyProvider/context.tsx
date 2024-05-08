import { createContext } from 'react';
import { Faculty, FacultyActions, FacultyState} from './interface';
import { Answer } from '../ResponseProvider/interface';

export const INITIAL_FACULTY: Faculty = {
    name : '',
    description : '',
    requiredSubjects : '',
    id : ''
}

export const FacultyStateContextInitial: FacultyState = {
    faculty : INITIAL_FACULTY,
    faculties : [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const FacultyActionsDefault =  {
    GetFaculty: (FacultyId: string) => {},
    GetAllFaculties: async () => Promise<any>,
    GetFacultyBySkills: async (skills:Answer)=> Promise<any>,
    AddLearnerFaculties: (skills:Answer,learner:Response)=> Promise<any>,
    DeleteFaculty: (id: string) => {},
}

export const FacultyStateContext = createContext(FacultyStateContextInitial);
export const FacultyActionsContext = createContext<FacultyActions>(FacultyActionsDefault);
