import { createContext } from 'react';
import { Question, QuestionActions, QuestionState} from './interface';

export const INITIAL_INSTITUTION: Question = {
    questionText : '',
    skill : '',
    id:''
}

export const QuestionStateContextInitial: QuestionState = {
    question: INITIAL_INSTITUTION,
    questions: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const QuestionActionsDefault =  {
    GetQuestion: (QuestionId: string) => {},
    GetAllQuestions: () => Promise<any>,
    DeleteQuestion: (id: string) => {},
}

export const QuestionStateContext = createContext(QuestionStateContextInitial);
export const QuestionActionsContext = createContext<QuestionActions>(QuestionActionsDefault);
