import {Dispatch} from "redux";
import {deleteOne, get, post} from "../../services/fetchData";
import {errorHandler} from "../../utils/errorHandler";
import {IMessage, IMessageCreate, MessageActions, MessageActionsTypes} from "../types/messageTypes";
import {IUser} from "../types/userTypes";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";

export const createMessage = (newMessage: IMessageCreate) => async (dispatch: Dispatch<MessageActions | GlobalActions>) => {
    try {
        const response = await post('/message', newMessage)
        const answer = await get(`/message/${response.data.id}`)
        const getCurrentMessage = await get(`/message/${response.data.id}`)
        dispatch({type: MessageActionsTypes.MESSAGE_SET_CURRENT, payload: getCurrentMessage.data})
        dispatch({type: MessageActionsTypes.MESSAGE_ADD, payload: answer.data})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: response.data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
        // setTimeout(() => {
        //     dispatch({type: MessageActionsTypes.MESSAGE_SET_CURRENT_RESET})
        // }, 1000)

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

export const messageSetRecipient = (item: IUser): MessageActions => {
    return {type: MessageActionsTypes.MESSAGE_SET_RECIPIENT, payload: item}
}

export const messageAdd = (message: IMessage): MessageActions => {
    return {type: MessageActionsTypes.MESSAGE_ADD, payload: message}
}

// export const messageSerCurrentMessageReset = (): MessageActions => {
//     return {type: MessageActionsTypes.MESSAGE_SET_CURRENT_RESET}
// }