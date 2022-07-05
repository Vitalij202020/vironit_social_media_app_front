import {IUser} from "./userTypes";

export enum MessageActionsTypes {
    // MESSAGE_CREATE = 'MESSAGE_CREATE',
    MESSAGE_GET = 'MESSAGE_GET',
    MESSAGE_DELETE = 'MESSAGE_DELETE',
}

export interface IMessage {
    _id: string;
    conversation: string;
    sender: IUser;
    recipient: IUser;
    message: string;
    createdAt: string;
}

export interface IMessageCreate {
    sender: string;
    recipient: string;
    message: string;
}

export interface IMessageState {
    messages: IMessage[];
}

// interface IMessageCreate {
//     type: MessageActionsTypes.MESSAGE_CREATE;
//     payload: string;
// }

interface IMessageGet {
    type: MessageActionsTypes.MESSAGE_GET;
    payload: IMessage[];
}

interface IMessageDelete {
    type: MessageActionsTypes.MESSAGE_DELETE;
    payload: string;
}

export type MessageActions =
    // IMessageCreate
    | IMessageGet
    | IMessageDelete
