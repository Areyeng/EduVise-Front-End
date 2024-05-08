import { QuestionActionTypes } from "./action";
import { QuestionStateContextInitial } from "./context";
import { handleActions } from "redux-actions";

const questionReducer = handleActions({
   
    [QuestionActionTypes.GetQuestionPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [QuestionActionTypes.GetQuestionSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [QuestionActionTypes.GetQuestionError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [QuestionActionTypes.GetAllQuestionsPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [QuestionActionTypes.GetAllQuestionsSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [QuestionActionTypes.GetAllQuestionsError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [QuestionActionTypes.DeleteQuestionPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [QuestionActionTypes.DeleteQuestionSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [QuestionActionTypes.DeleteQuestionError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    
  }, QuestionStateContextInitial);
  
  export default questionReducer;