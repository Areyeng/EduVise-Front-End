import { createContext } from 'react';
import { SavedFunding, SavedFundingActions, SavedFundingState} from './interface';

export const INITIAL_SAVED: SavedFunding = {
    id : '',
    learnerId : '',
    fundingId : ''
}
export const SavedStateContextInitial: SavedFundingState = {
    savedFundings: INITIAL_SAVED,
    returnedFundings: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}
export const SavedActionsDefault = {
    AddFunding: (savedDetails: SavedFunding) => {},
    GetFundings: (learner: string)=> Promise<any>
}
export const SavedFundingStateContext = createContext(SavedStateContextInitial);
export const SavedFundingActionsContext = createContext<SavedFundingActions>(SavedActionsDefault);