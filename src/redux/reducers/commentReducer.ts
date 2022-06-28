import {CommentActions, CommentActionsTypes, ICommentState} from "../types/commentTypes";

const initialCommentState: ICommentState = {
    loading: false,
    error: '',
    success: '',
    commentInput: ''
}

export const commentReducer = (state: ICommentState = initialCommentState, action: CommentActions ): ICommentState => {
    switch (action.type) {
        case CommentActionsTypes.COMMENT_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CommentActionsTypes.COMMENT_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload,
            }
        case CommentActionsTypes.COMMENT_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case CommentActionsTypes.COMMENT_INPUT_ONCHANGE:
            return {
                ...state,
                commentInput: action.payload,
            }
        case CommentActionsTypes.COMMENT_DELETE_ONE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CommentActionsTypes.COMMENT_DELETE_ONE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload,
            }
        case CommentActionsTypes.COMMENT_DELETE_ONE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}