import { createContext } from 'react';
import { Institution, InstitutionActions, InstitutionState} from './interface';

export const INITIAL_INSTITUTION: Institution = {
    id: '',
    name : '',
    description : '',
    accreditation : '',
    ranking : '',
    passRate : 0,
    address :'',
    openingDate : '',
    closingDate : '',
    programmesLink : '',
    yearbookLink : '',
    applicationLink : '',
}

export const InstitutionStateContextInitial: InstitutionState = {
    institution: INITIAL_INSTITUTION,
    institutions: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const InstitutionActionsDefault: InstitutionActions =  {
    GetInstitution: (InstitutionId: string) => {},
    GetAllInstitutions: async () => Promise<any>,
    DeleteInstitution: (id: string) => {},
}

export const InstitutionActionsContext = createContext<InstitutionActions>(InstitutionActionsDefault);
export const InstitutionStateContext = createContext(InstitutionStateContextInitial);


