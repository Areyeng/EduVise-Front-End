import { createContext } from 'react';
import { Event, EventActions, EventState} from './interface';

export const INITIAL_INSTITUTION: Event = {
    Name : '',
    Description : '',
    Type : '',
    DateTime : new Date,
    Venue : '',
}

export const EventStateContextInitial: EventState = {
    institution: INITIAL_INSTITUTION,
    institutions: [],
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const EventActionsDefault =  {
    GetEvent: (EventId: string) => {},
    GetAllEvents: () => Promise<any>,
    DeleteEvent: (id: string) => {},
}

//export const EventStateContext = createContext(EventStateContextInitial);
export const EventActionsContext = createContext<EventActions>(EventActionsDefault);
export const EventStateContext = createContext(EventStateContextInitial);

