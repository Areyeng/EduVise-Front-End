export interface Course {
    Name : string,
    Description : string,
    InstitutionCriteria :string,
    FacultyCriteria : string,
    AnnualAmount : number,
    Duration : number,
    OpeningDate : Date,
    ClosingDate : Date,
    CourseLink : Date,
}

export interface CourseState {
    institution?: Course;
    institutions?: Course[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface CourseActions {
    GetCourse: (CourseId: string) => void;
    GetAllCourses: () => Promise<any>;
    DeleteCourse: (id: string) => void;
}
export interface CourseAction{
    type: string,
    payload?: {
        Name : string,
        Description : string,
        InstitutionCriteria :string,
        FacultyCriteria : string,
        AnnualAmount : number,
        Duration : number,
        OpeningDate : Date,
        ClosingDate : Date,
        CourseLink : Date,
    } 
}

export interface GetCourse{
    type: string;
    payload: CourseState[];
}
export interface GetAllCourses{
    type: string;
    payload?: CourseState[];
}
