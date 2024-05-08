import { handleActions } from "redux-actions";
import { SavedCourseActionTypes } from "./action";
import { SavedStateContextInitial } from "./context";

const savedReducer = handleActions({
    [SavedCourseActionTypes.AddCoursePending]: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
      isSuccess: action.payload.isSuccess,
      isError: action.payload.isError
    }),
    [SavedCourseActionTypes.AddCourseSuccess]: (state, action) => ({
      ...state,
      isPending: false,
      isSuccess: true,
      isError: false
    }),
    [SavedCourseActionTypes.AddCourseError]: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
      isSuccess: action.payload.isSuccess,
      isError: action.payload.isError
    }),
    [SavedCourseActionTypes.GetCoursePending]: (state, action) => ({
        ...state,
        isPending: action.payload.isPending,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError
      }),
      [SavedCourseActionTypes.GetCourseSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
        isPending: false,
        isSuccess: true,
        isError: false
      }),
      [SavedCourseActionTypes.GetCourseError]: (state, action) => ({
        ...state,
        isPending: action.payload.isPending,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError
      })
}, SavedStateContextInitial);

export default savedReducer;