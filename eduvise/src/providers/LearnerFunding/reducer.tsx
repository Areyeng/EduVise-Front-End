import { handleActions } from "redux-actions";
import { SavedFundingActionTypes } from "./action";
import { SavedStateContextInitial } from "./context";

const savedReducer = handleActions({
    [SavedFundingActionTypes.AddFundingPending]: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
      isSuccess: action.payload.isSuccess,
      isError: action.payload.isError
    }),
    [SavedFundingActionTypes.AddFundingSuccess]: (state, action) => ({
      ...state,
      isPending: false,
      isSuccess: true,
      isError: false
    }),
    [SavedFundingActionTypes.AddFundingError]: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
      isSuccess: action.payload.isSuccess,
      isError: action.payload.isError
    }),
    [SavedFundingActionTypes.GetFundingPending]: (state, action) => ({
        ...state,
        isPending: action.payload.isPending,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError
      }),
      [SavedFundingActionTypes.GetFundingSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
        isPending: false,
        isSuccess: true,
        isError: false
      }),
      [SavedFundingActionTypes.GetFundingError]: (state, action) => ({
        ...state,
        isPending: action.payload.isPending,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError
      })
}, SavedStateContextInitial);

export default savedReducer;