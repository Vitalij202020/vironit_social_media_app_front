import {IUser} from "./userTypes";

export enum ConversationActionsTypes {
    CONVERSATION_GET = 'CONVERSATION_GET',
    CONVERSATION_DELETE = 'CONVERSATION_DELETE',
}

export interface IConversationState {
    users: IUser[];
}

interface IConversationGet {
    type: ConversationActionsTypes.CONVERSATION_GET;
    payload: IUser[];
}

interface IConversationDelete {
    type: ConversationActionsTypes.CONVERSATION_DELETE;
    payload: string;
}

export type ConversationActions =
    IConversationGet
    | IConversationDelete
