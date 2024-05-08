import { handleActions } from "redux-actions";
import { IAuthStateContext, INITIAL_STATE } from "./context";
import { AuthActionEnums } from "./action";

const userReducer = handleActions({
    [AuthActionEnums.LoginRequest]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AuthActionEnums.LoginSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AuthActionEnums.LoginError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AuthActionEnums.LogoutRequest]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AuthActionEnums.LogoutSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AuthActionEnums.LogoutError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AuthActionEnums.GetLearnerInfoPending ]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AuthActionEnums.GetLearnerInfoSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [AuthActionEnums.GetLearnerInfoError]: (state, action) => ({
      ...state,
      ...action.payload
    }),

  },
  INITIAL_STATE
);
 
  export default userReducer;


