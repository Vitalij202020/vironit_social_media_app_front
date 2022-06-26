export enum GlobalActionsTypes {
    GLOBAL_SHOW_STATUS_ON = 'GLOBAL_SHOW_STATUS_ON',
    GLOBAL_SHOW_STATUS_OFF = 'GLOBAL_SHOW_STATUS_OFF',
    GLOBAL_SHOW_MESSAGE_SUCCESS = 'GLOBAL_SHOW_MESSAGE_SUCCESS',
    GLOBAL_SHOW_MESSAGE_ERROR = 'GLOBAL_SHOW_MESSAGE_ERROR',
    GLOBAL_CLEAR_FIELDS = 'GLOBAL_CLEAR_FIELDS'
}

interface IGlobalShowMessageSuccess {
    type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS;
    payload: string;
}

interface IGlobalShowMessageError {
    type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR;
    payload: string;
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

export type GlobalActions =
    IGlobalShowMessageSuccess
    | IGlobalShowMessageError
    | IGlobalShowStatusOn
    | IGlobalShowStatusOff
    | IGlobalClearFields


export interface IGlobalState {
    status: boolean;
    loading: boolean;
    error: boolean;
    success: boolean;
    msg: string;
}