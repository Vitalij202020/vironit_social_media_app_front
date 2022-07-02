import {IUserLogin, IUserRegister, IUserUpdate, UserActions, UserActionsTypes} from "../types/userTypes";
import {Dispatch} from "redux";
import {patch, post, get} from "../../services/fetchData";
import {errorHandler} from "../../utils/errorHandler";
import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";

export const register = (user: IUserRegister) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_REGISTER_REQUEST})
        const {data} = await post('/register', user)
        dispatch({type: UserActionsTypes.USER_REGISTER_SUCCESS, payload: data.msg})
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_CLEAR_FIELDS})
        }, 2500)
    } catch (error: any) {
        dispatch({type: UserActionsTypes.USER_REGISTER_FAIL, payload: errorHandler(error)})
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_CLEAR_FIELDS})
        }, 4000)
    }
}

export const login = (user: IUserLogin) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_LOGIN_REQUEST})
        const {data} = await post('/login', user)
        dispatch({type: UserActionsTypes.USER_LOGIN_SUCCESS, payload: data})
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', JSON.stringify(data.token))
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_CLEAR_FIELDS})
        }, 2500)
    } catch (error: any) {
        dispatch({type: UserActionsTypes.USER_LOGIN_FAIL, payload: errorHandler(error)})
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_CLEAR_FIELDS})
        }, 4000)
    }
}

export const updateUser = (user: IUserUpdate) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_UPDATE_REQUEST})
        const {data} = await patch('/user', user)
        dispatch({type: UserActionsTypes.USER_UPDATE_SUCCESS, payload: data})
        localStorage.setItem('user', JSON.stringify(data.user))
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_CLEAR_FIELDS})
        }, 3000)
    } catch (error: any) {
        dispatch({type: UserActionsTypes.USER_UPDATE_FAIL, payload: errorHandler(error)})
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_CLEAR_FIELDS})
        }, 4000)
    }
}

export const logout = () => async (dispatch: Dispatch<UserActions>) => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch({type: UserActionsTypes.USER_UPDATE_SHOW_FORM_OFF})
    dispatch({type: UserActionsTypes.USER_LOGOUT})
}

export const showEditFormOn = () => async (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionsTypes.USER_UPDATE_SHOW_FORM_ON})
}

export const showEditFormOff = () => async (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionsTypes.USER_UPDATE_SHOW_FORM_OFF})
}

export const getAllUsers = () => async (dispatch: Dispatch<UserActions | GlobalActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_GET_ALL_USERS_REQUEST})
        const {data} = await get('/users')
        dispatch({type: UserActionsTypes.USER_GET_ALL_USERS_SUCCESS, payload: data})
    } catch (error: any) {
        dispatch({type: UserActionsTypes.USER_UPDATE_FAIL, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_MESSAGE_ERROR, payload: errorHandler(error)})
        dispatch({type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_ON})
    }
}

// export const getUserById = (id: string) => async (dispatch: Dispatch<UserAction>) => {
//     try {
//         dispatch({type: UserActionsTypes.USER_FETCH_REQUEST})
//         const {data} = await patch('/user', )
//         console.log("---update--data---", data.msg)
//         dispatch({type: UserActionsTypes.USER_UPDATE_SUCCESS, payload: data})
//     } catch (error: any) {
//         console.log("---error---", error)
//         dispatch({
//             type: UserActionsTypes.USER_FETCH_ERROR,
//             payload:
//                 error.response && error.response.data.msg
//                     ? error.response.data.msg
//                     : error.message
//         })
//         setTimeout(() => {
//             dispatch({type: UserActionsTypes.USER_FETCH_ERROR, payload: ''})
//         }, 4000)
//     }
// }