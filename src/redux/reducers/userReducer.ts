import {IUserState, UserActions, UserActionsTypes} from "../types/userTypes";


const initialUserState: IUserState = {
    user: null,
    users: [],
    loading: false,
    error: '',
    success: '',
    token: null,
    showEditForm: false,
}

export const userReducer = (state: IUserState = initialUserState, action: UserActions ): IUserState => {
    switch (action.type) {
        case UserActionsTypes.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionsTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload,
            }
        case UserActionsTypes.USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionsTypes.USER_GET_ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionsTypes.USER_GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case UserActionsTypes.USER_GET_ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
            }
        case UserActionsTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionsTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                success: action.payload.msg,
                token: action.payload.token
            }
        case UserActionsTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionsTypes.USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionsTypes.USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                success: action.payload.msg,
            }
        case UserActionsTypes.USER_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionsTypes.USER_UPDATE_SHOW_FORM_ON:
            return {
                ...state,
                showEditForm: true
            }
        case UserActionsTypes.USER_UPDATE_SHOW_FORM_OFF:
            return {
                ...state,
                showEditForm: false
            }
        case UserActionsTypes.USER_CLEAR_FIELDS:
            return {
                ...state,
                success: '',
                error: ''
            }
        case UserActionsTypes.USER_LOGOUT:
            return {
                ...state,
                loading: false,
                error: '',
                success: '',
                user: null,
                token: null
            }
        default:
            return state;
    }
}