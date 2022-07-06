import {IUser} from "./userTypes";

export enum MessageActionsTypes {
    MESSAGE_ADD = 'MESSAGE_ADD',
    MESSAGE_GET = 'MESSAGE_GET',
    MESSAGE_DELETE = 'MESSAGE_DELETE',
    MESSAGE_SET_RECIPIENT = 'MESSAGE_SET_RECIPIENT',
    MESSAGE_SET_CURRENT = 'MESSAGE_SET_CURRENT',
    MESSAGE_SET_CURRENT_RESET = 'MESSAGE_SET_CURRENT_RESET',
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
    recipient?: IUser;
    currentMessage: IMessage | null;
}

interface IMessageAdd {
    type: MessageActionsTypes.MESSAGE_ADD;
    payload: IMessage;
}

interface IMessageGet {
    type: MessageActionsTypes.MESSAGE_GET;
    payload: IMessage[];
}

interface IMessageSetCurrentMessage {
    type: MessageActionsTypes.MESSAGE_SET_CURRENT;
    payload: IMessage;
}

interface IMessageSetRecipient {
    type: MessageActionsTypes.MESSAGE_SET_RECIPIENT;
    payload: IUser;
}

interface IMessageDelete {
    type: MessageActionsTypes.MESSAGE_DELETE;
    payload: string;
}

interface IMessageSetCurrentMessageReset {
    type: MessageActionsTypes.MESSAGE_SET_CURRENT_RESET;
}

export type MessageActions =
    IMessageAdd
    | IMessageGet
    | IMessageDelete
    | IMessageSetRecipient
    | IMessageSetCurrentMessage
    | IMessageSetCurrentMessageReset
