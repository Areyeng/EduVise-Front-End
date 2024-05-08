import { FundingActionTypes } from "./action";
import { FundingStateContextInitial } from "./context";
import { handleActions } from "redux-actions";

const fundingReducer = handleActions({
   
    [FundingActionTypes.GetFundingPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FundingActionTypes.GetFundingSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FundingActionTypes.GetFundingError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FundingActionTypes.GetAllFundingsPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FundingActionTypes.GetAllFundingsSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FundingActionTypes.GetAllFundingsError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FundingActionTypes.DeleteFundingPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FundingActionTypes.DeleteFundingSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [FundingActionTypes.DeleteFundingError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    
  }, FundingStateContextInitial);
  
  export default fundingReducer;