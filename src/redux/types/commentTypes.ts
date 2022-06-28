import {IUser} from "./userTypes";

export enum CommentActionsTypes {
    COMMENT_CREATE_REQUEST = 'COMMENT_CREATE_REQUEST',
    COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS',
    COMMENT_CREATE_FAIL = 'COMMENT_CREATE_FAIL',

    COMMENT_INPUT_ONCHANGE = 'COMMENT_INPUT_ONCHANGE',

    COMMENT_DELETE_ONE_REQUEST = 'COMMENT_DELETE_ONE_REQUEST',
    COMMENT_DELETE_ONE_SUCCESS = 'COMMENT_DELETE_ONE_SUCCESS',
    COMMENT_DELETE_ONE_FAIL = 'COMMENT_DELETE_ONE_FAIL'
}

export interface IComment {
    _id: string;
    content: string;
    user: IUser;
    postId: string;
    postUserId: string;
}

export interface ICommentCreate {
    content: string;
    postId: string;
    postUserId: string;
}

interface ICommentCreateRequest {
    type: CommentActionsTypes.COMMENT_CREATE_REQUEST;
}

interface ICommentCreateSuccess {
    type: CommentActionsTypes.COMMENT_CREATE_SUCCESS;
    payload: string;
}

interface ICommentCreateFail {
    type: CommentActionsTypes.COMMENT_CREATE_FAIL;
    payload: string;
}

interface ICommentInputOnchange {
    type: CommentActionsTypes.COMMENT_INPUT_ONCHANGE;
    payload: string;
}

interface ICommentDeleteOneRequest {
    type: CommentActionsTypes.COMMENT_DELETE_ONE_REQUEST;
}

interface ICommentDeleteOneSuccess {
    type: CommentActionsTypes.COMMENT_DELETE_ONE_SUCCESS;
    payload: string;
}

interface ICommentDeleteOneFail {
    type: CommentActionsTypes.COMMENT_DELETE_ONE_FAIL;
    payload: string;
}

export type CommentActions =
    ICommentCreateRequest
    | ICommentCreateSuccess
    | ICommentCreateFail
    | ICommentDeleteOneRequest
    | ICommentDeleteOneSuccess
    | ICommentDeleteOneFail
    | ICommentInputOnchange

export interface ICommentState {
    loading: boolean;
    error: string;
    success: string;
    commentInput: string;
}