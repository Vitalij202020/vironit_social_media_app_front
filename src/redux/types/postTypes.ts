import {IUser} from "./userTypes";

export enum PostActionsTypes {
    POST_CREATE_REQUEST = 'POST_CREATE_REQUEST',
    POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS',
    POST_CREATE_FAIL = 'POST_CREATE_FAIL',

    POST_UPDATE_REQUEST = 'POST_UPDATE_REQUEST',
    POST_UPDATE_SUCCESS = 'POST_UPDATE_SUCCESS',
    POST_UPDATE_FAIL = 'POST_UPDATE_FAIL',
    POST_FOR_UPDATE = 'POST_FOR_UPDATE',

    POST_DELETE_REQUEST = 'POST_DELETE_REQUEST',
    POST_DELETE_SUCCESS = 'POST_DELETE_SUCCESS',
    POST_DELETE_FAIL = 'POST_DELETE_FAIL',

    POST_LIST_REQUEST = 'POST_LIST_REQUEST',
    POST_LIST_SUCCESS = 'POST_LIST_SUCCESS',
    POST_LIST_FAIL = 'POST_LIST_FAIL',

    MY_POST_LIST_REQUEST = 'MY_POST_LIST_REQUEST',
    MY_POST_LIST_SUCCESS = 'MY_POST_LIST_SUCCESS',
    MY_POST_LIST_FAIL = 'MY_POST_LIST_FAIL',

    POST_LIKE_REQUEST = 'POST_LIKE_REQUEST',
    POST_LIKE_SUCCESS = 'POST_LIKE_SUCCESS',
    POST_LIKE_FAIL = 'POST_LIKE_FAIL',

    POST_UNLIKE_REQUEST = 'POST_UNLIKE_REQUEST',
    POST_UNLIKE_SUCCESS = 'POST_UNLIKE_SUCCESS',
    POST_UNLIKE_FAIL = 'POST_UNLIKE_FAIL',

    POST_CLEAR_FIELDS = 'POST_CLEAR_FIELDS',
    POST_GET_USER_POSTS = 'POST_GET_USER_POSTS',
}

export interface IPost {
    _id: string;
    title: string;
    description: string;
    image: string;
    likes: any[];
    comments: any[];
    user: IUser;
    createdAt: string;
}

export interface IPostCreate {
    title: string;
    description: string;
    image: string;
}

export interface IPostUpdate {
    _id: string;
    title: string;
    description: string;
    image: string;
}

export interface IPostCreateResponse {
    post: IPost;
    user: IUser;
    msg: string;
}

export interface IPostUpdateResponse {
    post: IPost;
    msg: string;
}

export interface IPostState {
    userPosts: IPost[];
    post: IPost | null;
    myPosts: IPost[];
    user: IUser | null;
    posts: IPost[];
    postForUpdate: IPost | null;
    loading: boolean;
    error: string;
    success: string;
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

interface IPostUpdateRequest {
    type: PostActionsTypes.POST_UPDATE_REQUEST;
}

interface IPostUpdateSuccess {
    type: PostActionsTypes.POST_UPDATE_SUCCESS;
    payload: IPostUpdateResponse;
}

interface IPostUpdateFail {
    type: PostActionsTypes.POST_UPDATE_FAIL;
    payload: string;
}

interface IPostForUpdate {
    type: PostActionsTypes.POST_FOR_UPDATE;
    payload: IPost;
}

interface IPostDeleteRequest {
    type: PostActionsTypes.POST_DELETE_REQUEST;
}

interface IPostDeleteSuccess {
    type: PostActionsTypes.POST_DELETE_SUCCESS;
    payload: string;
}

interface IPostDeleteFail {
    type: PostActionsTypes.POST_DELETE_FAIL;
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

interface IPostMyListRequest {
    type: PostActionsTypes.MY_POST_LIST_REQUEST;
}

interface IPostMyListSuccess {
    type: PostActionsTypes.MY_POST_LIST_SUCCESS;
    payload: IPost[];
}

interface IPostGetUserPosts {
    type: PostActionsTypes.POST_GET_USER_POSTS;
    payload: IPost[];
}

interface IPostMyListFail {
    type: PostActionsTypes.MY_POST_LIST_FAIL;
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

interface IPostClearFields {
    type: PostActionsTypes.POST_CLEAR_FIELDS;
}


export type PostActions =
    IPostCreateRequest
    | IPostCreateSuccess
    | IPostCreateFail
    | IPostUpdateRequest
    | IPostUpdateSuccess
    | IPostUpdateFail
    | IPostForUpdate
    | IPostDeleteRequest
    | IPostDeleteSuccess
    | IPostDeleteFail
    | IPostListRequest
    | IPostListSuccess
    | IPostListFail
    | IPostMyListRequest
    | IPostMyListSuccess
    | IPostMyListFail
    | IPostLikeRequest
    | IPostLikeSuccess
    | IPostLikeFail
    | IPostUnlikeRequest
    | IPostUnlikeSuccess
    | IPostUnlikeFail
    | IPostClearFields
    | IPostGetUserPosts