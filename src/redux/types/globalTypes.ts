import {Socket} from "socket.io-client";

export enum GlobalActionsTypes {
    GLOBAL_SHOW_STATUS_ON = 'GLOBAL_SHOW_STATUS_ON',
    GLOBAL_SHOW_STATUS_OFF = 'GLOBAL_SHOW_STATUS_OFF',

    GLOBAL_SHOW_MESSAGE_SUCCESS = 'GLOBAL_SHOW_MESSAGE_SUCCESS',
    GLOBAL_SHOW_MESSAGE_ERROR = 'GLOBAL_SHOW_MESSAGE_ERROR',

    GLOBAL_POST_FLAG = 'GLOBAL_POST_FLAG',
    GLOBAL_USER_FLAG = 'GLOBAL_USER_FLAG',
    GLOBAL_NOTIFICATION_FLAG = 'GLOBAL_NOTIFICATION_FLAG',

    GLOBAL_CLEAR_FIELDS = 'GLOBAL_CLEAR_FIELDS',
    GLOBAL_SOCKET = 'GLOBAL_SOCKET'
}

export interface IGlobalState {
    notificationFlag: boolean;
    userFlag: boolean;
    postFlag: boolean;
    status: boolean;
    loading: boolean;
    error: boolean;
    success: boolean;
    msg: string;
    socketIo: any;
}

interface IGlobalShowMessageSuccess {
    type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS;
    payload: string;
}

interface IGlobalShowMessageError {
    type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR;
    payload: string;
}

interface IGlobalSocket {
    type: GlobalActionsTypes.GLOBAL_SOCKET;
    payload: Socket;
}

interface IGlobalShowStatusOn {
    type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON;
}

interface IGlobalShowStatusOff {
    type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_OFF;
}

interface IGlobalClearFields {
    type: GlobalActionsTypes.GLOBAL_CLEAR_FIELDS;
}

interface IGlobalPostFlag {
    type: GlobalActionsTypes.GLOBAL_POST_FLAG;
}

interface IGlobalUserFlag {
    type: GlobalActionsTypes.GLOBAL_USER_FLAG;
}

interface IGlobalNotificationFlag {
    type: GlobalActionsTypes.GLOBAL_NOTIFICATION_FLAG;
}

export type GlobalActions =
    IGlobalShowMessageSuccess
    | IGlobalShowMessageError
    | IGlobalShowStatusOn
    | IGlobalShowStatusOff
    | IGlobalClearFields
    | IGlobalPostFlag
    | IGlobalUserFlag
    | IGlobalNotificationFlag
    | IGlobalSocket