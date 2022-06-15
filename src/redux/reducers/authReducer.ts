import {AuthAction, AuthActionsTypes, AuthState} from "../types/authTypes";


const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    success: null,
    token: null
}

const authReducer = (state: AuthState = initialState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case  AuthActionsTypes.AUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case AuthActionsTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                user: action.payload.user,
                success: action.payload.msg,
                token: action.payload.token
            }
        case AuthActionsTypes.AUTH_REFRESH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                user: action.payload,
            }
        case AuthActionsTypes.AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;