
import { createAction } from "redux-actions";
import { Answer } from "./interface";
import { Faculty } from "../FacultyProvider/interface";

export enum AnswerActionTypes {

    GetLearnerAnswersPending = "GetLearnerAnswersPending",
    GetLearnerAnswersSuccess = "GetLearnerAnswersSuccess",
    GetLearnerAnswersError = "GetLearnerAnswersError",
    
    AddLearnerAnswerPending = "AddLearnerAnswerPendingPending",
    AddLearnerAnswerSuccess = "AddLearnerAnswerPendingSuccess",
    AddLearnerAnswerError = "AddLearnerAnswerPendingError",
}

export const getLearnerAnswersPendingAction = createAction(
    AnswerActionTypes.GetLearnerAnswersPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const getLearnerAnswersSuccessAction = createAction(
    AnswerActionTypes.GetLearnerAnswersSuccess,
    (Answer: Answer) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        Answer
    })
);
export const getLearnerAnswersErrorAction = createAction(
    AnswerActionTypes.GetLearnerAnswersError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);

export const addLearnerAnswersPendingAction = createAction(
    AnswerActionTypes.AddLearnerAnswerPending,
    () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
);
export const addLearnerAnswersSuccessAction = createAction(
    AnswerActionTypes.AddLearnerAnswerSuccess,
    (skills: Answer) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        skills
    })
);
export const addLearnerAnswersErrorAction = createAction(
    AnswerActionTypes.AddLearnerAnswerError,
    () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
);
