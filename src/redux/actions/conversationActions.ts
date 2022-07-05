import {Dispatch} from "redux";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";
import {deleteOne, get} from "../../services/fetchData";
import {errorHandler} from "../../utils/errorHandler";
import {ConversationActions, ConversationActionsTypes} from "../types/conversationTypes";

export const deleteConversation = (id: string) => async (dispatch: Dispatch<ConversationActions | GlobalActions>) => {
    try {
        const {data} = await deleteOne(`/conversation/${id}`)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const getConversations = () => async (dispatch: Dispatch<ConversationActions | GlobalActions>) => {
    try {
        const {data} = await get('/conversations')
        dispatch({type: ConversationActionsTypes.CONVERSATION_GET, payload: data})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}