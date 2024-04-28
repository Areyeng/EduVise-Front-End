export interface Faculty {
    Name : string,
    Description : string,
    Type : string,// (Open Day,Career Fair,Information Session etc)
    DateTime : Date,
    Venue : string,
    //Guid InstitutionId : 
}

export interface FacultyState {
    institution?: Faculty;
    institutions?: Faculty[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface FacultyActions {
    GetFaculty: (FacultyId: string) => void;
    GetAllFaculties: () => Promise<any>;
    DeleteFaculty: (id: string) => void;
}
export interface FacultyAction{
    type: string,
    payload?: {
        Name : string,
        Description : string,
        Type : string,
        DateTime : Date,
        Venue : string,
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