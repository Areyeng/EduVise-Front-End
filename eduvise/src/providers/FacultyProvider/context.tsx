import { createContext } from 'react';
import { Faculty, FacultyActions, FacultyState} from './interface';

export const INITIAL_INSTITUTION: Faculty = {
    name : '',
    description : '',
    requiredSubjects : '',
    id : ''
}

export const FacultyStateContextInitial: FacultyState = {
    faculty: INITIAL_INSTITUTION,
    faculties: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const FacultyActionsDefault =  {
    GetFaculty: (FacultyId: string) => {},
    GetAllFaculties: () => Promise<any>,
    DeleteFaculties: (id: string) => {},
}

export const FacultyStateContext = createContext(FacultyStateContextInitial);
export const FacultyActionsContext = createContext<FacultyActions>(FacultyActionsDefault);
