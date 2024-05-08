import { handleActions } from "redux-actions";
import { SavedInstitutionActionTypes } from "./action";
import { SavedStateContextInitial } from "./context";

const savedReducer = handleActions({
    [SavedInstitutionActionTypes.AddInstitutionPending]: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
      isSuccess: action.payload.isSuccess,
      isError: action.payload.isError
    }),
    [SavedInstitutionActionTypes.AddInstitutionSuccess]: (state, action) => ({
      ...state,
      isPending: false,
      isSuccess: true,
      isError: false
    }),
    [SavedInstitutionActionTypes.AddInstitutionError]: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
      isSuccess: action.payload.isSuccess,
      isError: action.payload.isError
    }),
    [SavedInstitutionActionTypes.GetInstitutionPending]: (state, action) => ({
        ...state,
        isPending: action.payload.isPending,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError
      }),
      [SavedInstitutionActionTypes.GetInstitutionSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
        isPending: false,
        isSuccess: true,
        isError: false
      }),
      [SavedInstitutionActionTypes.GetInstitutionError]: (state, action) => ({
        ...state,
        isPending: action.payload.isPending,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError
      })
}, SavedStateContextInitial);

export default savedReducer;