import { createContext } from 'react';
import { SavedInstitution, SavedInstitutionActions, SavedInstitutionState} from './interface';
import { INITIAL_INSTITUTION } from '../InstitutionProvider/context';

export const INITIAL_SAVED: SavedInstitution = {
    id : '',
    learnerId : '',
    institutionId : ''
}
export const SavedStateContextInitial: SavedInstitutionState = {
    savedInstitutions: INITIAL_SAVED,
    returnedInstitutions: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}
export const SavedActionsDefault = {
    AddInstitution: (savedDetails: SavedInstitution) => {},
    GetInstitutions: (learner: string)=> Promise<any>
}
export const SavedInstitutionStateContext = createContext(SavedStateContextInitial);
export const SavedInstitutionActionsContext = createContext<SavedInstitutionActions>(SavedActionsDefault)