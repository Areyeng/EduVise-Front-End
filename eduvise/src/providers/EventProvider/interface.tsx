export interface Event {
    Name : string,
    Description : string,
    Type : string,// (Open Day,Career Fair,Information Session etc)
    DateTime : Date,
    Venue : string,
    //Guid InstitutionId : 
}

export interface EventState {
    institution?: Event;
    institutions?: Event[];
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
        Name : string,
        Description : string,
        Type : string,
        DateTime : Date,
        Venue : string,
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