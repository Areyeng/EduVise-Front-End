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

export const InstitutionActionsDefault =  {
    GetInstitution: (InstitutionId: string) => {},
    GetAllInstitutions: () => Promise<any>,
    DeleteInstitution: (id: string) => {},
}

export const InstitutionStateContext = createContext(InstitutionStateContextInitial);
export const InstitutionActionsContext = createContext<InstitutionActions>(InstitutionActionsDefault);

