import {Dispatch} from "redux";
import {IPostCreate, PostActions, PostActionsTypes} from "../types/postTypes";
import {get, patch, post} from "../../services/fetchData";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";

export const createPost = (newPost: IPostCreate) => async (dispatch: Dispatch<PostActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_CREATE_REQUEST})
        const {data} = await post('/post', newPost)
        dispatch({type: PostActionsTypes.POST_CREATE_SUCCESS, payload: data})
        setTimeout(() => {
            dispatch({type: PostActionsTypes.POST_CREATE_CLEAR_SUCCESS_FIELD})
        }, 2000)
    } catch (error: any) {
        dispatch({
            type: PostActionsTypes.POST_CREATE_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
        setTimeout(() => {
            dispatch({type: PostActionsTypes.POST_CREATE_CLEAR_ERROR_FIELD})
        }, 4000)
    }
}

export const getAllPosts = () => async (dispatch: Dispatch<PostActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_LIST_REQUEST})
        const {data} = await get('/post')
        dispatch({type: PostActionsTypes.POST_LIST_SUCCESS, payload: data})
    } catch (error: any) {
        dispatch({
            type: PostActionsTypes.POST_LIST_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
    }
}

export const likePost = (id: string) => async (dispatch: Dispatch<PostActions | GlobalActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_LIKE_REQUEST})
        const {data} = await patch(`/post/${id}/like`)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: PostActionsTypes.POST_LIKE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        const err = error.response && error.response.data.msg ? error.response.data.msg : error.message;
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: err})
        dispatch({type: PostActionsTypes.POST_LIKE_FAIL, payload: err})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const unlikePost = (id: string) => async (dispatch: Dispatch<PostActions | GlobalActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_UNLIKE_REQUEST})
        const {data} = await patch(`/post/${id}/unlike`)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: PostActionsTypes.POST_UNLIKE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        const err = error.response && error.response.data.msg ? error.response.data.msg : error.message;
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: err})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const postLikeShowInfoOff = (): PostActions => {
    return {type: PostActionsTypes.POST_LIKE_SHOW_INFO_OFF}
}

export const postUnlikeShowInfoOff = (): PostActions => {
    return {type: PostActionsTypes.POST_UNLIKE_SHOW_INFO_OFF}
}