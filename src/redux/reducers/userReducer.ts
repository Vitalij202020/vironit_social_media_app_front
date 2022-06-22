import {IUserLoginState, IUserRegisterState, IUserUpdateState, UserActions, UserActionsTypes} from "../types/userTypes";


const initialUserRegisterState: IUserRegisterState = {
    loading: false,
    error: '',
    success: '',
}

export const userRegisterReducer = (state: IUserRegisterState = initialUserRegisterState, action: UserActions ): IUserRegisterState => {
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
                error: '',
                success: action.payload,
            }
        case UserActionsTypes.USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const initialUserLoginState: IUserLoginState = {
    user: null,
    loading: false,
    error: '',
    success: '',
    token: null
}

export const userLoginReducer = (state: IUserLoginState = initialUserLoginState, action: UserActions ): IUserLoginState => {
    switch (action.type) {
        case UserActionsTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionsTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
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
        case UserActionsTypes.USER_LOGIN_REFRESH_USER_DATA:
            return {
                ...state,
                user: action.payload,
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
        case UserActionsTypes.USER_LOGIN_CLEAR_ERROR_FIELD:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}

const initialUserUpdateState: IUserUpdateState = {
    user: null,
    loading: false,
    error: '',
    success: '',
    showEditForm: false,
}

export const userUpdateReducer = (state: IUserUpdateState = initialUserUpdateState, action: UserActions ): IUserUpdateState => {
    switch (action.type) {
        case UserActionsTypes.USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionsTypes.USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
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
        case UserActionsTypes.USER_UPDATE_CLEAR_SUCCESS_FIELD:
            return {
                ...state,
                success: ''
            }
        case UserActionsTypes.USER_UPDATE_CLEAR_ERROR_FIELD:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}