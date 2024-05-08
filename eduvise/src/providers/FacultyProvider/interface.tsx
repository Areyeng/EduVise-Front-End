import { Answer } from "../ResponseProvider/interface";



export interface Faculty {
   name : string,
   description : string,
   requiredSubjects : string,
   id : string,
   
}

export interface FacultyState {
    faculty?: Faculty;
    faculties?: Faculty[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface FacultyActions {
    GetFaculty: (FacultyId: string) => void;
    GetAllFaculties: () => Promise<any>;
    DeleteFaculty: (id: string) => void;
    GetFacultyBySkills: (skills:Answer)=> Promise<any>;
    
}

export interface FacultyAction{
    type: string,
    payload?: {
        name : string,
        description : string,
        requiredSubjects : string,
        id : string
    } 
}

export interface GetFaculty{
    type: string;
    payload: FacultyState[];
}
export interface GetAllFaculties{
    type: string;
    payload?: FacultyState[];
}
export interface GetFacultyBySkills{
    type: string;
    payload?: FacultyState[];
}
