import {deleteOne, post, get} from "../../services/fetchData";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";
import {Dispatch} from "redux";
import {errorHandler} from "../../utils/errorHandler";
import {FriendshipActions, FriendshipActionsTypes, IFriendshipSendRequest} from "../types/friendshipTypes";


export const sendFriendshipRequest = (body: IFriendshipSendRequest) => async (dispatch: Dispatch<FriendshipActions | GlobalActions>) => {
    try {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_REQUEST})
        const {data} = await post('/friend', body)
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_SUCCESS})
        dispatch({type: GlobalActionsTypes.GLOBAL_NOTIFICATION_FLAG})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_FAIL})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const deleteFriendshipRequest = (id: string) => async (dispatch: Dispatch<FriendshipActions | GlobalActions>) => {
    try {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_REQUEST})
        const {data} = await deleteOne(`/friend/${id}`)
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_SUCCESS})
        dispatch({type: GlobalActionsTypes.GLOBAL_NOTIFICATION_FLAG})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_FAIL})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const acceptFriendshipRequest = (id: string) => async (dispatch: Dispatch<FriendshipActions | GlobalActions>) => {
    try {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_REQUEST})
        const {data} = await deleteOne(`/friend/${id}/accept`)
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_SUCCESS})
        dispatch({type: GlobalActionsTypes.GLOBAL_NOTIFICATION_FLAG})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_FAIL})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const getFriendsRequest = (id: string) => async (dispatch: Dispatch<FriendshipActions | GlobalActions>) => {
    try {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_REQUEST})
        const {data} = await get(`/friends/${id}`)
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_SUCCESS, payload: data})
    } catch (error: any) {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_FAIL})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const getSentFriendRequests = () => async (dispatch: Dispatch<FriendshipActions | GlobalActions>) => {
    try {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_REQUEST})
        const {data} = await get('/friend')
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_GET_SENT_OFFERS, payload: data})
    } catch (error: any) {
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

export const deleteFriendship = (id: string) => async (dispatch: Dispatch<FriendshipActions | GlobalActions>) => {
    try {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_REQUEST})
        const {data} = await deleteOne(`/friend/delete/${id}`)
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_SUCCESS})
        dispatch({type: GlobalActionsTypes.GLOBAL_NOTIFICATION_FLAG})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS, payload: data.msg})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    } catch (error: any) {
        dispatch({type: FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_FAIL})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}