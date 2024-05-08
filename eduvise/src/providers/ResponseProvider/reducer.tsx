import { AnswerActionTypes } from "./action";
import { AnswerStateContextInitial } from "./context";
import { handleActions } from "redux-actions";

const AnswerReducer = handleActions({
   
    [AnswerActionTypes.GetLearnerAnswersPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AnswerActionTypes.GetLearnerAnswersSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AnswerActionTypes.GetLearnerAnswersError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AnswerActionTypes.AddLearnerAnswerPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AnswerActionTypes.AddLearnerAnswerSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AnswerActionTypes.AddLearnerAnswerError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
 

    }, AnswerStateContextInitial);
  
  export default AnswerReducer;