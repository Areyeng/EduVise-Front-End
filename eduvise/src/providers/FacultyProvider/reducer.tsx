import { FacultyActionTypes } from "./action";
import { FacultyStateContextInitial } from "./context";
import { handleActions } from "redux-actions";

const facultyReducer = handleActions({

    [FacultyActionTypes.GetFacultyPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.GetFacultySuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.GetFacultyError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.GetAllFacultiesPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.GetAllFacultiesSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.GetAllFacultiesError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.GetFacultiesBySkillsPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.GetFacultiesBySkillsSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.GetFacultiesBySkillsError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.DeleteFacultyPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.DeleteFacultySuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FacultyActionTypes.DeleteFacultyError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    
  }, FacultyStateContextInitial);
  
  export default facultyReducer;