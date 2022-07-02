import {Dispatch} from "redux";
import {deleteOne, post} from "../../services/fetchData";
import {CommentActions, CommentActionsTypes, ICommentCreate} from "../types/commentTypes";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";
import {errorHandler} from "../../utils/errorHandler";

export const createComment = (newComment: ICommentCreate) => async (dispatch: Dispatch<CommentActions | GlobalActions>) => {
    try {
        dispatch({type: CommentActionsTypes.COMMENT_CREATE_REQUEST})
        const {data} = await post('/comment', newComment)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: CommentActionsTypes.COMMENT_CREATE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
        dispatch({type: GlobalActionsTypes.GLOBAL_POST_FLAG})
    } catch (error: any) {
        dispatch({type: CommentActionsTypes.COMMENT_CREATE_FAIL, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const deleteComment = (id: string) => async (dispatch: Dispatch<CommentActions | GlobalActions>) => {
    try {
        dispatch({type: CommentActionsTypes.COMMENT_DELETE_ONE_REQUEST})
        const {data} = await deleteOne(`/comment/${id}`)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: CommentActionsTypes.COMMENT_DELETE_ONE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
        dispatch({type: GlobalActionsTypes.GLOBAL_POST_FLAG})
    } catch (error: any) {
        dispatch({type: CommentActionsTypes.COMMENT_DELETE_ONE_FAIL, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const commentInputOnchange = (content: string): CommentActions => {
    return {type: CommentActionsTypes.COMMENT_INPUT_ONCHANGE, payload: content}
}