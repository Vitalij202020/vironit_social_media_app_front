import {IUser} from "./userTypes";

export enum FriendshipActionsTypes {
    FRIENDSHIP_SEND_OFFER_REQUEST = 'FRIENDSHIP_SEND_OFFER_REQUEST',
    FRIENDSHIP_SEND_OFFER_SUCCESS = 'FRIENDSHIP_SEND_OFFER_SUCCESS',
    FRIENDSHIP_SEND_OFFER_FAIL = 'FRIENDSHIP_SEND_OFFER_FAIL',

    FRIENDSHIP_DELETE_OFFER_REQUEST = 'FRIENDSHIP_DELETE_OFFER_REQUEST',
    FRIENDSHIP_DELETE_OFFER_SUCCESS = 'FRIENDSHIP_DELETE_OFFER_SUCCESS',
    FRIENDSHIP_DELETE_OFFER_FAIL = 'FRIENDSHIP_DELETE_OFFER_FAIL',

    FRIENDSHIP_ACCEPT_OFFER_REQUEST = 'FRIENDSHIP_ACCEPT_OFFER_REQUEST',
    FRIENDSHIP_ACCEPT_OFFER_SUCCESS = 'FRIENDSHIP_ACCEPT_OFFER_SUCCESS',
    FRIENDSHIP_ACCEPT_OFFER_FAIL = 'FRIENDSHIP_ACCEPT_OFFER_FAIL',

    FRIENDSHIP_DELETE_FRIEND_REQUEST = 'FRIENDSHIP_DELETE_FRIEND_REQUEST',
    FRIENDSHIP_DELETE_FRIEND_SUCCESS = 'FRIENDSHIP_DELETE_FRIEND_SUCCESS',
    FRIENDSHIP_DELETE_FRIEND_FAIL = 'FRIENDSHIP_DELETE_FRIEND_FAIL',

    FRIENDSHIP_GET_FRIENDS_REQUEST = 'FRIENDSHIP_GET_FRIENDS_REQUEST',
    FRIENDSHIP_GET_FRIENDS_SUCCESS = 'FRIENDSHIP_GET_FRIENDS_SUCCESS',
    FRIENDSHIP_GET_FRIENDS_FAIL = 'FRIENDSHIP_GET_FRIENDS_FAIL',

    FRIENDSHIP_GET_SENT_OFFERS = 'FRIENDSHIP_GET_SENT_OFFERS'
}

export  interface IFriendshipSendRequest {
    to: string;
    content: string;
}

export  interface IFriendshipState {
    loading: boolean;
    friends: IUser[];
    friendsId: string[];
}

interface IFriendshipSendOfferRequest {
    type: FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_REQUEST;
}

interface IFriendshipSendOfferSuccess {
    type: FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_SUCCESS;
}

interface IFriendshipSendOfferFail {
    type: FriendshipActionsTypes.FRIENDSHIP_SEND_OFFER_FAIL;
}

interface IFriendshipDeleteOfferRequest {
    type: FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_REQUEST;
}

interface IFriendshipDeleteOfferSuccess {
    type: FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_SUCCESS;
}

interface IFriendshipDeleteOfferFail {
    type: FriendshipActionsTypes.FRIENDSHIP_DELETE_OFFER_FAIL;
}

interface IFriendshipAcceptOfferRequest {
    type: FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_REQUEST;
}

interface IFriendshipAcceptOfferSuccess {
    type: FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_SUCCESS;
}

interface IFriendshipAcceptOfferFail {
    type: FriendshipActionsTypes.FRIENDSHIP_ACCEPT_OFFER_FAIL;
}

interface IFriendshipDeleteFriendRequest {
    type: FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_REQUEST;
}

interface IFriendshipDeleteFriendSuccess {
    type: FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_SUCCESS;
}

interface IFriendshipDeleteFriendFail {
    type: FriendshipActionsTypes.FRIENDSHIP_DELETE_FRIEND_FAIL;
}

interface IFriendshipGetFriendsRequest {
    type: FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_REQUEST;
}

interface IFriendshipGetFriendsSuccess {
    type: FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_SUCCESS;
    payload: IUser[];
}

interface IFriendshipGetFriendsFail {
    type: FriendshipActionsTypes.FRIENDSHIP_GET_FRIENDS_FAIL;
}

interface IFriendshipGetSentOffers {
    type: FriendshipActionsTypes.FRIENDSHIP_GET_SENT_OFFERS;
    payload: string[]
}

export type FriendshipActions =
    IFriendshipSendOfferRequest
    | IFriendshipSendOfferSuccess
    | IFriendshipSendOfferFail
    | IFriendshipDeleteOfferRequest
    | IFriendshipDeleteOfferSuccess
    | IFriendshipDeleteOfferFail
    | IFriendshipAcceptOfferRequest
    | IFriendshipAcceptOfferSuccess
    | IFriendshipAcceptOfferFail
    | IFriendshipDeleteFriendRequest
    | IFriendshipDeleteFriendSuccess
    | IFriendshipDeleteFriendFail
    | IFriendshipGetFriendsRequest
    | IFriendshipGetFriendsSuccess
    | IFriendshipGetFriendsFail
    | IFriendshipGetSentOffers