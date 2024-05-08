export interface Course {
    name : string,
    description : string,
    facultyName : string,
    jobTitles : string,
    avgAPS : number,
    avgDuration : string,
    avgTuition :string,
    facultyId : string,
    id: string
}

export interface CourseState {
    course?: Course;
    courses?: Course[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface CourseActions {
    GetCourse: (courseId: string) => void;
    GetAllCourses: () => Promise<any>;
    GetCoursesByFacultyId:(facultyId: string)=> Promise<any>;
}

export interface CourseAction{
    type: string,
    payload?: {
        name : string,
        description : string,
        facultyName : string,
        jobTitles : number,
        avgAPS : string,
        avgDuration : string,
        avgTuition :string,
        facultyId : string,
        id: string
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
export interface GetCoursesByFacultyId{
    type: string;
    payload?: CourseState[];
}