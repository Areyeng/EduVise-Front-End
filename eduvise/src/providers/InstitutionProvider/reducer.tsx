import { InstitutionActionTypes } from "./action";
import { InstitutionStateContextInitial } from "./context";
import { handleActions } from "redux-actions";

const institutionReducer = handleActions({
   
    [InstitutionActionTypes.GetInstitutionPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InstitutionActionTypes.GetInstitutionSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InstitutionActionTypes.GetInstitutionError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InstitutionActionTypes.GetAllInstitutionsPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InstitutionActionTypes.GetAllInstitutionsSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InstitutionActionTypes.GetAllInstitutionsError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InstitutionActionTypes.DeleteInstitutionPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InstitutionActionTypes.DeleteInstitutionSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InstitutionActionTypes.DeleteInstitutionError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
 
    
  }, InstitutionStateContextInitial);
  
  export default institutionReducer;