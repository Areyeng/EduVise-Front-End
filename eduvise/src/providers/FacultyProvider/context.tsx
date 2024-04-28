import { createContext } from 'react';
import { Faculty, FacultyActions, FacultyState} from './interface';

export const INITIAL_INSTITUTION: Faculty = {
    Name : '',
    Description : '',
    Type : '',
    DateTime : new Date,
    Venue : '',
}

export const FacultyStateContextInitial: FacultyState = {
    institution: INITIAL_INSTITUTION,
    institutions: [],
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
