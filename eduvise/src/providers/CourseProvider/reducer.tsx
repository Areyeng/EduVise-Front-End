import { CourseActionTypes } from "./action";
import { CourseStateContextInitial } from "./context";
import { handleActions } from "redux-actions";

const CourseReducer = handleActions({

    [CourseActionTypes.GetCoursePending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [CourseActionTypes.GetCourseSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [CourseActionTypes.GetCourseError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [CourseActionTypes.GetAllCoursesPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [CourseActionTypes.GetAllCoursesSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [CourseActionTypes.GetAllCoursesError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [CourseActionTypes.DeleteCoursePending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [CourseActionTypes.DeleteCourseSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [CourseActionTypes.DeleteCourseError]: (state, action) => ({
      ...state,
      ...action.payload
    }),

    
  }, CourseStateContextInitial);
  
  export default CourseReducer;