import {IPostCreateState, IPostLikeState, IPostListState, PostActions, PostActionsTypes} from "../types/postTypes";

const initialPostCreateState: IPostCreateState = {
    post: null,
    user: null,
    loading: false,
    error: '',
    success: '',
}

export const postCreateReducer = (state: IPostCreateState = initialPostCreateState, action: PostActions ): IPostCreateState => {
    switch (action.type) {
        case PostActionsTypes.POST_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PostActionsTypes.POST_CREATE_SUCCESS:
            return {
                ...state,
                post: action.payload.post,
                user: action.payload.user,
                loading: false,
                error: '',
                success: action.payload.msg,
            }
        case PostActionsTypes.POST_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PostActionsTypes.POST_CREATE_CLEAR_SUCCESS_FIELD:
            return {
                ...state,
                success: ''
            }
        case PostActionsTypes.POST_CREATE_CLEAR_ERROR_FIELD:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}

const initialPostListState: IPostListState = {
    posts: [],
    loading: false,
    error: '',
}

export const postListReducer = (state: IPostListState = initialPostListState, action: PostActions ): IPostListState => {
    switch (action.type) {
        case PostActionsTypes.POST_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PostActionsTypes.POST_LIST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: '',
            }
        case PostActionsTypes.POST_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const initialPostLikeState: IPostLikeState = {
    info: false,
    loading: false,
    error: false,
    success: false,
    msg: ''
}

export const postLikeReducer = (state: IPostLikeState = initialPostLikeState, action: PostActions): IPostLikeState => {
    switch (action.type) {
        case PostActionsTypes.POST_LIKE_REQUEST:
            return {
                ...state,
                success: false,
                error: false,
                loading: true
            }
        case PostActionsTypes.POST_LIKE_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                msg: action.payload
            }
        case PostActionsTypes.POST_LIKE_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                msg: action.payload
            }
        case PostActionsTypes.POST_LIKE_SHOW_INFO_ON:
            return {
                ...state,
                info: true
            }
        case PostActionsTypes.POST_LIKE_SHOW_INFO_OFF:
            return {
                ...state,
                info: false
            }
        case PostActionsTypes.POST_UNLIKE_REQUEST:
            return {
                ...state,
                success: false,
                error: false,
                loading: true
            }
        case PostActionsTypes.POST_UNLIKE_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                msg: action.payload
            }
        case PostActionsTypes.POST_UNLIKE_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                msg: action.payload
            }
        case PostActionsTypes.POST_UNLIKE_SHOW_INFO_ON:
            return {
                ...state,
                info: true
            }
        case PostActionsTypes.POST_UNLIKE_SHOW_INFO_OFF:
            return {
                ...state,
                info: false
            }
        default:
            return state;
    }
}