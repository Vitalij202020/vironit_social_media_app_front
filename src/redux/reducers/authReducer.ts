import {AuthAction, AuthActionsTypes} from "../types/authTypes";


const authReducer = (state = {}, action: AuthAction) => {
    switch (action.type) {
        case  AuthActionsTypes.REGISTER_USER:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default authReducer;