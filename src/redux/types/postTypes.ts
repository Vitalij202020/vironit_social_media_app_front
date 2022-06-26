import {IUser} from "./userTypes";

export enum PostActionsTypes {
    POST_CREATE_REQUEST = 'POST_CREATE_REQUEST',
    POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS',
    POST_CREATE_FAIL = 'POST_CREATE_FAIL',
    POST_CREATE_CLEAR_SUCCESS_FIELD = 'POST_CREATE_CLEAR_SUCCESS_FIELD',
    POST_CREATE_CLEAR_ERROR_FIELD = 'POST_CREATE_CLEAR_ERROR_FIELD',

    POST_LIST_REQUEST = 'POST_LIST_REQUEST',
    POST_LIST_SUCCESS = 'POST_LIST_SUCCESS',
    POST_LIST_FAIL = 'POST_LIST_FAIL',

    POST_LIKE_REQUEST = 'POST_LIKE_REQUEST',
    POST_LIKE_SUCCESS = 'POST_LIKE_SUCCESS',
    POST_LIKE_FAIL = 'POST_LIKE_FAIL',
    POST_LIKE_SHOW_INFO_ON = 'POST_LIKE_SHOW_INFO_ON',
    POST_LIKE_SHOW_INFO_OFF = 'POST_LIKE_SHOW_INFO_OFF',

    POST_UNLIKE_REQUEST = 'POST_UNLIKE_REQUEST',
    POST_UNLIKE_SUCCESS = 'POST_UNLIKE_SUCCESS',
    POST_UNLIKE_FAIL = 'POST_UNLIKE_FAIL',
    POST_UNLIKE_SHOW_INFO_ON = 'POST_UNLIKE_SHOW_INFO_ON',
    POST_UNLIKE_SHOW_INFO_OFF = 'POST_UNLIKE_SHOW_INFO_OFF'
}

export interface IPost {
    _id: string;
    title: string;
    description: string;
    image: string;
    likes: any[];
    comments: any[];
    user: IUser;
}

export interface IPostCreate {
    title: string;
    description: string;
    image: string;
}

export interface IPostCreateResponse {
    post: IPost;
    user: IUser;
    msg: string;
}

interface IPostCreateRequest {
    type: PostActionsTypes.POST_CREATE_REQUEST;
}

interface IPostCreateSuccess {
    type: PostActionsTypes.POST_CREATE_SUCCESS;
    payload: IPostCreateResponse;
}

interface IPostCreateFail {
    type: PostActionsTypes.POST_CREATE_FAIL;
    payload: string;
}

interface IPostListRequest {
    type: PostActionsTypes.POST_LIST_REQUEST;
}

interface IPostListSuccess {
    type: PostActionsTypes.POST_LIST_SUCCESS;
    payload: IPost[];
}

interface IPostListFail {
    type: PostActionsTypes.POST_LIST_FAIL;
    payload: string;
}

interface IPostLikeRequest {
    type: PostActionsTypes.POST_LIKE_REQUEST;
}

interface IPostLikeSuccess {
    type: PostActionsTypes.POST_LIKE_SUCCESS;
    payload: string;
}

interface IPostLikeFail {
    type: PostActionsTypes.POST_LIKE_FAIL;
    payload: string;
}

interface IPostLikeShowInfoOn {
    type: PostActionsTypes.POST_LIKE_SHOW_INFO_ON;
}

interface IPostLikeShowInfoOff {
    type: PostActionsTypes.POST_LIKE_SHOW_INFO_OFF;
}

interface IPostUnlikeRequest {
    type: PostActionsTypes.POST_UNLIKE_REQUEST;
}

interface IPostUnlikeSuccess {
    type: PostActionsTypes.POST_UNLIKE_SUCCESS;
    payload: string;
}

interface IPostUnlikeFail {
    type: PostActionsTypes.POST_UNLIKE_FAIL;
    payload: string;
}

interface IPostUnlikeShowInfoOn {
    type: PostActionsTypes.POST_UNLIKE_SHOW_INFO_ON;
}

interface IPostUnlikeShowInfoOff {
    type: PostActionsTypes.POST_UNLIKE_SHOW_INFO_OFF;
}

interface IPostCreateClearSuccessField {
    type: PostActionsTypes.POST_CREATE_CLEAR_SUCCESS_FIELD;
}

interface IPostCreateClearErrorField {
    type: PostActionsTypes.POST_CREATE_CLEAR_ERROR_FIELD;
}

export type PostActions =
    IPostCreateRequest
    | IPostCreateSuccess
    | IPostCreateFail
    | IPostListRequest
    | IPostListSuccess
    | IPostListFail
    | IPostLikeRequest
    | IPostLikeSuccess
    | IPostLikeFail
    | IPostLikeShowInfoOn
    | IPostLikeShowInfoOff
    | IPostUnlikeRequest
    | IPostUnlikeSuccess
    | IPostUnlikeFail
    | IPostUnlikeShowInfoOn
    | IPostUnlikeShowInfoOff
    | IPostCreateClearSuccessField
    | IPostCreateClearErrorField


export interface IPostCreateState {
    post: IPost | null;
    user: IUser | null;
    loading: boolean;
    error: string;
    success: string;
}

export interface IPostListState {
    posts: IPost[];
    loading: boolean;
    error: string;
}

export interface IPostLikeState {
    info: boolean;
    loading: boolean;
    error: boolean;
    success: boolean;
    msg: string;
}