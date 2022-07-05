import {Dispatch} from "redux";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";
import {deleteOne, get, post} from "../../services/fetchData";
import {errorHandler} from "../../utils/errorHandler";
import {IMessageCreate, MessageActions, MessageActionsTypes} from "../types/messageTypes";

export const createMessage = (newMessage: IMessageCreate) => async (dispatch: Dispatch<MessageActions | GlobalActions>) => {
    try {
        const {data} = await post('/message', newMessage)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const deleteMessage = (id: string) => async (dispatch: Dispatch<MessageActions | GlobalActions>) => {
    try {
        const {data} = await deleteOne(`/message/${id}`)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const getMessages = (id: string) => async (dispatch: Dispatch<MessageActions | GlobalActions>) => {
    try {
        const {data} = await get(`/messages/${id}`)
        dispatch({type: MessageActionsTypes.MESSAGE_GET, payload: data})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}