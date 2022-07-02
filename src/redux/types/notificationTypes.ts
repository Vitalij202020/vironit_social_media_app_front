import {IUser} from "./userTypes";

export enum NotificationActionsTypes {
    NOTIFICATION_GET_REQUEST = 'NOTIFICATION_GET_REQUEST',
    NOTIFICATION_GET_SUCCESS = 'NOTIFICATION_GET_SUCCESS',
    NOTIFICATION_GET_FAIL = 'NOTIFICATION_GET_FAIL',

    NOTIFICATION_DELETE_REQUEST = 'NOTIFICATION_DELETE_REQUEST',
    NOTIFICATION_DELETE_SUCCESS = 'NOTIFICATION_DELETE_SUCCESS',
    NOTIFICATION_DELETE_FAIL = 'NOTIFICATION_DELETE_FAIL',
}

export  interface INotification {
    _id: string;
    from: IUser | null;
    to: IUser | null;
    content: string;
}

export  interface INotificationState {
    loading: boolean;
    notifications: INotification[];
}

interface INotificationGetRequest {
    type: NotificationActionsTypes.NOTIFICATION_GET_REQUEST;
}

interface INotificationGetSuccess {
    type: NotificationActionsTypes.NOTIFICATION_GET_SUCCESS;
    payload: INotification[];
}

interface INotificationGetFail {
    type: NotificationActionsTypes.NOTIFICATION_GET_FAIL;
}

interface INotificationDeleteRequest {
    type: NotificationActionsTypes.NOTIFICATION_DELETE_REQUEST;
}

interface INotificationDeleteSuccess {
    type: NotificationActionsTypes.NOTIFICATION_DELETE_SUCCESS;
}

interface INotificationDeleteFail {
    type: NotificationActionsTypes.NOTIFICATION_DELETE_FAIL;
}

export type NotificationActions =
    INotificationGetRequest
    | INotificationGetSuccess
    | INotificationGetFail
    | INotificationDeleteRequest
    | INotificationDeleteSuccess
    | INotificationDeleteFail