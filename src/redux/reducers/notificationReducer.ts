import {INotificationState, NotificationActions, NotificationActionsTypes} from "../types/notificationTypes";

const initialNotificationState: INotificationState = {
    loading: false,
    notifications: [],
}

export const notificationReducer = (state: INotificationState = initialNotificationState, action: NotificationActions ): INotificationState => {
    switch (action.type) {
        case NotificationActionsTypes.NOTIFICATION_GET_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NotificationActionsTypes.NOTIFICATION_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                notifications: action.payload,
            }
        case NotificationActionsTypes.NOTIFICATION_GET_FAIL:
            return {
                ...state,
                loading: false,
            }
        case NotificationActionsTypes.NOTIFICATION_DELETE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NotificationActionsTypes.NOTIFICATION_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case NotificationActionsTypes.NOTIFICATION_DELETE_FAIL:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}