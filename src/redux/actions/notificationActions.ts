import {deleteOne, get} from "../../services/fetchData";
import {NotificationActions, NotificationActionsTypes} from "../types/notificationTypes";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";
import {Dispatch} from "redux";
import {errorHandler} from "../../utils/errorHandler";


export const getNotifications = () => async (dispatch: Dispatch<NotificationActions | GlobalActions>) => {
    try {
        dispatch({type: NotificationActionsTypes.NOTIFICATION_GET_REQUEST})
        const {data} = await get('/notification')
        dispatch({type: NotificationActionsTypes.NOTIFICATION_GET_SUCCESS, payload: data})
    } catch (error: any) {
        dispatch({type: NotificationActionsTypes.NOTIFICATION_GET_FAIL})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const deleteNotification = (id: string) => async (dispatch: Dispatch<NotificationActions | GlobalActions>) => {
    try {
        dispatch({type: NotificationActionsTypes.NOTIFICATION_DELETE_REQUEST})
        const {data} = await deleteOne(`/notification/${id}`)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
        dispatch({type: GlobalActionsTypes.GLOBAL_NOTIFICATION_FLAG})
    } catch (error: any) {
        dispatch({type: NotificationActionsTypes.NOTIFICATION_DELETE_FAIL})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}