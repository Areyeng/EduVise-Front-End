import { handleActions } from "redux-actions";
import { SavedEventActionTypes } from "./action";
import { SavedStateContextInitial } from "./context";

const savedReducer = handleActions({
    [SavedEventActionTypes.AddEventPending]: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
      isSuccess: action.payload.isSuccess,
      isError: action.payload.isError
    }),
    [SavedEventActionTypes.AddEventSuccess]: (state, action) => ({
      ...state,
      isPending: false,
      isSuccess: true,
      isError: false
    }),
    [SavedEventActionTypes.AddEventError]: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
      isSuccess: action.payload.isSuccess,
      isError: action.payload.isError
    }),
    [SavedEventActionTypes.GetEventPending]: (state, action) => ({
        ...state,
        isPending: action.payload.isPending,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError
      }),
      [SavedEventActionTypes.GetEventSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
        isPending: false,
        isSuccess: true,
        isError: false
      }),
      [SavedEventActionTypes.GetEventError]: (state, action) => ({
        ...state,
        isPending: action.payload.isPending,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError
      })
}, SavedStateContextInitial);

export default savedReducer;