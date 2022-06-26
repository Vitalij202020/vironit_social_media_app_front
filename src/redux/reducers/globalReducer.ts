import {GlobalActions, GlobalActionsTypes, IGlobalState} from "../types/globalTypes";

const initialGlobalState: IGlobalState = {
    status: false,
    loading: false,
    error: false,
    success: false,
    msg: ''
}

export const globalReducer = (state: IGlobalState = initialGlobalState, action: GlobalActions): IGlobalState => {
    switch (action.type) {
        case GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                msg: action.payload
            }
        case GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                msg: action.payload
            }
        case GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON:
            return {
                ...state,
                status: true
            }
        case GlobalActionsTypes.GLOBAL_SHOW_STATUS_OFF:
            return {
                ...state,
                status: false
            }
        case GlobalActionsTypes.GLOBAL_CLEAR_FIELDS:
            return {
                status: false,
                loading: false,
                error: false,
                success: false,
                msg: ''
            }
        default:
            return state;
    }
}