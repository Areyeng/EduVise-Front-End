export interface Question {
    questionText : string,
    skill : string,
    id:string
}
export interface Response{
    criticalThinking: number,
    problemSolving: number,
    effectiveCommunication: number,
    healthcareProficiency: number,
    instructionalDesign: number,
    legalReasoning: number,
    leadership: number,
    environmentalSustainability: number,
}

export interface QuestionState {
    question?: Question;
    questions?: Question[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface QuestionActions {
    GetQuestion: (QuestionId: string) => void;
    GetAllQuestions: () => Promise<any>;
}
export interface QuestionAction{
    type: string,
    payload?: {
        questionText : string,
        skill : string,
    } 
}

export interface GetQuestion{
    type: string;
    payload: QuestionState[];
}
export interface GetAllQuestions{
    type: string;
    payload?: QuestionState[];
}