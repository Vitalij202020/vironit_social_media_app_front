import {IPostState, PostActions, PostActionsTypes} from "../types/postTypes";

const initialPostState: IPostState = {
    userPosts: [],
    post: null,
    user: null,
    postForUpdate: null,
    loading: false,
    error: '',
    success: '',
    posts: [],
    myPosts: [],
}

export const postReducer = (state: IPostState = initialPostState, action: PostActions ): IPostState => {
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
                success: action.payload.msg,
            }
        case PostActionsTypes.POST_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PostActionsTypes.POST_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PostActionsTypes.POST_UPDATE_SUCCESS:
            return {
                ...state,
                post: action.payload.post,
                loading: false,
                success: action.payload.msg,
            }
        case PostActionsTypes.POST_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PostActionsTypes.POST_FOR_UPDATE:
            return {
                ...state,
                postForUpdate: action.payload
            }
        case PostActionsTypes.POST_DELETE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PostActionsTypes.POST_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload,
            }
        case PostActionsTypes.POST_DELETE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PostActionsTypes.POST_CLEAR_FIELDS:
            return {
                ...state,
                success: '',
                error: ''
            }
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
        case PostActionsTypes.POST_GET_USER_POSTS:
            return {
                ...state,
                userPosts: action.payload,
            }
        case PostActionsTypes.MY_POST_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PostActionsTypes.MY_POST_LIST_SUCCESS:
            return {
                ...state,
                myPosts: action.payload,
                loading: false,
                error: '',
            }
        case PostActionsTypes.MY_POST_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PostActionsTypes.POST_LIKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PostActionsTypes.POST_LIKE_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case PostActionsTypes.POST_LIKE_FAIL:
            return {
                ...state,
                loading: false,
            }
        case PostActionsTypes.POST_UNLIKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PostActionsTypes.POST_UNLIKE_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case PostActionsTypes.POST_UNLIKE_FAIL:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}