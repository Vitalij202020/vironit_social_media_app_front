import {UserAction, UserActionsTypes, UserState} from "../types/userTypes";


const initialState: UserState = {
    loading: false,
    error: null,
    success: null,
}

const userReducer = (state: UserState = initialState, action: UserAction ): UserState => {
    switch (action.type) {
        case UserActionsTypes.USER_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionsTypes.USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                success: action.payload,
            }
        case UserActionsTypes.USER_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;