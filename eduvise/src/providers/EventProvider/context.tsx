import { createContext } from 'react';
import { Event, EventActions, EventState} from './interface';

export const INITIAL_INSTITUTION: Event = {
    name : '',
    description : '',
    type : '',
    dateTime : new Date,
    venue : '',
    id:''
}

export const EventStateContextInitial: EventState = {
    event: INITIAL_INSTITUTION,
    events: [],
    isPending: false,
    isSuccess: false,
    isError: false
}

export const EventActionsDefault =  {
    GetEvent: (EventId: string) => {},
    GetAllEvents: () => Promise<any>,
    DeleteEvent: (id: string) => {},
}

export const EventActionsContext = createContext<EventActions>(EventActionsDefault);
export const EventStateContext = createContext(EventStateContextInitial);

