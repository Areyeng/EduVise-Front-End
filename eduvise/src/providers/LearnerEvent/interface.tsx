import { Event, EventState } from "../EventProvider/interface";

export interface SavedEvent{
    id?: string,
    learnerId: string,
    eventId:string
}
export interface SavedEventState {
    savedEvents?: SavedEvent;
    returnedEvents?: Event[];
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}
export interface SavedEventActions {
    AddEvent: (savedDetails: SavedEvent) => void;
    GetEvents: (learner: string)=> Promise<any>;
}
export interface SavedEventAction{
    type: string,
    payload?: {
        id?: string,
        learnerId: string,
        eventId:string
    } 
}
export interface GetEvents{
    type: string;
    payload?: EventState[];
}