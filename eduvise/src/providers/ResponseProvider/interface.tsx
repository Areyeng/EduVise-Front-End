
export interface Answer {
    id:string,
    criticalThinking: number 
    problemSolving: number,
    effectiveCommunication: number,
    healthcareProficiency: number,
    instructionalDesign: number,
    legalReasoning: number,
    leadership: number,
    environmentalSustainability:number
   
}

export interface AnswerState {
    skills?: Answer;
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface AnswerActions {
    GetLearnerAnswers: (LeanerId: string) => void;
    AddLearnerAnswer: (skills:Answer)=> void;
    
}
export interface AnswerAction{
    type: string,
    payload?: {
        id:string,
        criticalThinking: number
        problemSolving: number,
        effectiveCommunication: number,
        healthcareProficiency: number,
        instructionalDesign: number,
        legalReasoning: number,
        leadership: number,
        environmentalSustainability:number
    } 
}

export interface GetAnswers{
    type: string;
    payload: AnswerState[];
}

