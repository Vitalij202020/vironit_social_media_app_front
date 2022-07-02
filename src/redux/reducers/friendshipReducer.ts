import {FriendshipActions, FriendshipActionsTypes, IFriendshipState} from "../types/friendshipTypes";

const initialFriendshipState: IFriendshipState = {
    friendsId: [],
    loading: false,
    friends: [],
}

export const friendshipReducer = (state: IFriendshipState = initialFriendshipState, action: FriendshipActions ): IFriendshipState => {
    switch (action.type) {
        case FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_FAIL:
            return {
                ...state,
                loading: false,
            }
        case FriendshipActionsTypes.FRIENDSHIP_GET_SENT_OFFERS:
            return {
                ...state,
                friendsId: action.payload,
            }
        case FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_FAIL:
            return {
                ...state,
                loading: false,
            }
        case FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_FAIL:
            return {
                ...state,
                loading: false,
            }
        case FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_FAIL:
            return {
                ...state,
                loading: false,
            }
        case FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_SUCCESS:
            return {
                ...state,
                loading: false,
                friends: action.payload
            }
        case FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_FAIL:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}