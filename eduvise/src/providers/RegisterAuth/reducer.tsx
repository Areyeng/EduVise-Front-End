import { RegisterActionTypes } from "./action";
import { RegisterStateContextInitial } from "./context";
import { handleActions } from "redux-actions";

const registerReducer = handleActions({
    
    [RegisterActionTypes.RegistrationPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [RegisterActionTypes.RegistrationSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [RegisterActionTypes.RegistrationError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    
}, RegisterStateContextInitial);
  
export default registerReducer;