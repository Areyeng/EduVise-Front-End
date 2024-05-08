
import { createAction } from "redux-actions";
import { Question } from "./interface";

export enum QuestionActionTypes {

    GetQuestionPending = "GetQuestionPending",
    GetQuestionSuccess = "GetQuestionSuccess",
    GetQuestionError = "GetQuestionError",

    GetAllQuestionsPending = "GetAllQuestionsPending",
    GetAllQuestionsSuccess = "GetAllQuestionsSuccess",
    GetAllQuestionsError = "GetAllQuestionsError",

    DeleteQuestionPending = "DeleteQuestionPending",   
    DeleteQuestionSuccess = "DeleteQuestionSuccess", 
    DeleteQuestionError = "DeleteQuestionError",

}

export const getQuestionPendingAction = createAction(
    QuestionActionTypes.GetQuestionPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getQuestionSuccessAction = createAction(
    QuestionActionTypes.GetQuestionSuccess,
    (question: Question) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        question
    })
);
export const getQuestionErrorAction = createAction(
    QuestionActionTypes.GetQuestionError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);

export const getAllQuestionsPendingAction = createAction(
    QuestionActionTypes.GetAllQuestionsPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getAllQuestionsSuccessAction = createAction(
    QuestionActionTypes.GetAllQuestionsSuccess, 
    (questions: Question[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        questions
    })
);
export const getAllQuestionsErrorAction = createAction(
    QuestionActionTypes.GetAllQuestionsError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);


