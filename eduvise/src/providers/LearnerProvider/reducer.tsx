import { handleActions } from "redux-actions";
import { InfoActionEnums } from "./action";
import { InfoStateContextInitial } from "./context";

const infoReducer = handleActions({

    [InfoActionEnums.GetLearnerInfoPending ]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InfoActionEnums.GetLearnerInfoSuccess]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [InfoActionEnums.GetLearnerInfoError]: (state, action) => ({
      ...state,
      ...action.payload
    }),

  },
  InfoStateContextInitial
);
 
  export default infoReducer;


