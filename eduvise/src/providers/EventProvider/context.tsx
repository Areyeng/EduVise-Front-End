import { createContext } from 'react';
import { Event, EventActions, EventState} from './interface';

export const INITIAL_EVENT: Event = {
    name : '',
    description : '',
    type : '',
    date : '',
    venue : '',
    id:''
}

export const EventStateContextInitial: EventState = {
    event: INITIAL_EVENT,
    events: [],
    isPending: false,
    isSuccess: false,
    isError: false
}

export const EventActionsDefault =  {
    GetEvent: (EventId: string) => {},
    GetAllEvents: () => Promise<any>,
    GetAllEventsByClosing: () => Promise<any>,
    DeleteEvent: (id: string) => {},
}

export const EventActionsContext = createContext<EventActions>(EventActionsDefault);
export const EventStateContext = createContext(EventStateContextInitial);

