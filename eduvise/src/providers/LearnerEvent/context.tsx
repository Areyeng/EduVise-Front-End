import { createContext } from 'react';
import { SavedEvent, SavedEventActions, SavedEventState} from './interface';

export const INITIAL_SAVED: SavedEvent = {
    id : '',
    learnerId : '',
    eventId : ''
}
export const SavedStateContextInitial: SavedEventState = {
    savedEvents: INITIAL_SAVED,
    returnedEvents: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}
export const SavedActionsDefault = {
    AddEvent: (savedDetails: SavedEvent) => {},
    GetEvents: (learner: string)=> Promise<any>
}
export const SavedEventStateContext = createContext(SavedStateContextInitial);
export const SavedEventActionsContext = createContext<SavedEventActions>(SavedActionsDefault);