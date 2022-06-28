import {Dispatch} from "redux";
import {IPost, IPostCreate, IPostUpdate, PostActions, PostActionsTypes} from "../types/postTypes";
import {deleteOne, get, patch, post} from "../../services/fetchData";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";
import {errorHandler} from "../../utils/errorHandler";

export const createPost = (newPost: IPostCreate) => async (dispatch: Dispatch<PostActions | GlobalActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_CREATE_REQUEST})
        const {data} = await post('/post', newPost)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: PostActionsTypes.POST_CREATE_SUCCESS, payload: data})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
        dispatch({type: GlobalActionsTypes.GLOBAL_SWITCHER})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const updatePost = (newPost: IPostUpdate) => async (dispatch: Dispatch<PostActions | GlobalActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_CREATE_REQUEST})
        const {data} = await patch('/post', newPost)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: PostActionsTypes.POST_UPDATE_SUCCESS, payload: data})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
        dispatch({type: GlobalActionsTypes.GLOBAL_SWITCHER})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const getAllPosts = () => async (dispatch: Dispatch<PostActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_LIST_REQUEST})
        const {data} = await get('/post')
        dispatch({type: PostActionsTypes.POST_LIST_SUCCESS, payload: data})
    } catch (error: any) {
        dispatch({type: PostActionsTypes.POST_LIST_FAIL, payload: errorHandler(error)})
    }
}

export const getAllMyPosts = () => async (dispatch: Dispatch<PostActions>) => {
    try {
        dispatch({type: PostActionsTypes.MY_POST_LIST_REQUEST})
        const {data} = await get('/my/post')
        dispatch({type: PostActionsTypes.MY_POST_LIST_SUCCESS, payload: data})
    } catch (error: any) {
        dispatch({type: PostActionsTypes.MY_POST_LIST_FAIL, payload: errorHandler(error)})
    }
}

export const likePost = (id: string) => async (dispatch: Dispatch<PostActions | GlobalActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_LIKE_REQUEST})
        const {data} = await patch(`/post/${id}/like`)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: PostActionsTypes.POST_LIKE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
        dispatch({type: GlobalActionsTypes.GLOBAL_SWITCHER})
    } catch (error: any) {
        const err = error.response && error.response.data.msg ? error.response.data.msg : error.message;
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: err})
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
        dispatch({type: GlobalActionsTypes.GLOBAL_SWITCHER})
    } catch (error: any) {
        const err = error.response && error.response.data.msg ? error.response.data.msg : error.message;
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: err})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const deletePost = (id: string) => async (dispatch: Dispatch<PostActions | GlobalActions>) => {
    try {
        dispatch({type: PostActionsTypes.POST_CREATE_REQUEST})
        const {data} = await deleteOne(`/post/${id}`)
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
        dispatch({type: GlobalActionsTypes.GLOBAL_SWITCHER})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const postForUpdate = (post: IPost) => async (dispatch: Dispatch<PostActions>) => {
    dispatch({type: PostActionsTypes.POST_FOR_UPDATE, payload: post})
}