import { createContext } from 'react';
import { Answer, AnswerActions, AnswerState} from './interface';

export const INITIAL_INSTITUTION: Answer = {
    id: '',
    criticalThinking: 0,
    problemSolving: 0,
    effectiveCommunication: 0,
    healthcareProficiency: 0,
    instructionalDesign: 0,
    legalReasoning: 0,
    leadership: 0,
    environmentalSustainability:0
}

export const AnswerStateContextInitial: AnswerState = {
    skills: INITIAL_INSTITUTION,
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const AnswerActionsDefault =  {
    GetLearnerAnswers: (AnswerId: string) => {},
    AddLearnerAnswer: (skills: Answer) => {},

}

export const AnswerStateContext = createContext(AnswerStateContextInitial);
export const AnswerActionsContext = createContext<AnswerActions>(AnswerActionsDefault);
