import { EventActionTypes } from "./action";
import { EventStateContextInitial } from "./context";
import { handleActions } from "redux-actions";

const eventReducer = handleActions({
    
    [EventActionTypes.GetEventPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [EventActionTypes.GetEventSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [EventActionTypes.GetEventError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [EventActionTypes.GetAllEventsPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [EventActionTypes.GetAllEventsSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [EventActionTypes.GetAllEventsError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [EventActionTypes.DeleteEventPending]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [EventActionTypes.DeleteEventSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [EventActionTypes.DeleteEventError]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    
  }, EventStateContextInitial);
  
  export default eventReducer;