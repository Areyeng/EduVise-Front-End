export interface Event {
    name : string,
    description : string,
    type : string,
    dateTime : Date,
    venue : string,
    id: string
}

export interface EventState {
    event?: Event;
    events?: Event[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

export interface EventActions {
    GetEvent: (EventId: string) => void;
    GetAllEvents: () => Promise<any>;
    DeleteEvent: (id: string) => void;
}
export interface EventAction{
    type: string,
    payload?: {
        name : string,
        description : string,
        type : string,
        dateTime : Date,
        venue : string,
        id: string
    } 
}

export interface GetEvent{
    type: string;
    payload: EventState[];
}
export interface GetAllEvents{
    type: string;
    payload?: EventState[];
}