import {IUserLogin, IUserRegister, IUserUpdate, UserActions, UserActionsTypes} from "../types/userTypes";
import {Dispatch} from "redux";
import {patch, post} from "../../services/fetchData";

export const register = (user: IUserRegister) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_REGISTER_REQUEST})
        const {data} = await post('/register', user)
        dispatch({type: UserActionsTypes.USER_REGISTER_SUCCESS, payload: data})
        // setTimeout(() => {
        //     dispatch({type: AuthActionsTypes.AUTH_CLEAR, payload: ''})
        // }, 2000)
    } catch (error: any) {
        dispatch({
            type: UserActionsTypes.USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
        // setTimeout(() => {
        //     dispatch({type: AuthActionsTypes.AUTH_CLEAR, payload: ''})
        // }, 4000)
    }
}

export const login = (user: IUserLogin) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_LOGIN_REQUEST})
        const {data} = await post('/login', user)
        dispatch({type: UserActionsTypes.USER_LOGIN_SUCCESS, payload: data})
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', JSON.stringify(data.token))
        // setTimeout(() => {
        //     dispatch({type: , payload: ''})
        // }, 3000)
    } catch (error: any) {
        dispatch({
            type: UserActionsTypes.USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_LOGIN_CLEAR_ERROR_FIELD, payload: ''})
        }, 4000)
    }
}

export const clearErrorField = (): UserActions => {
    return {type: UserActionsTypes.USER_LOGIN_CLEAR_ERROR_FIELD}
}

export const logout = () => async (dispatch: Dispatch<UserActions>) => {
    console.log('Logout - Action')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch({type: UserActionsTypes.USER_UPDATE_SHOW_FORM_OFF})
    dispatch({type: UserActionsTypes.USER_LOGOUT})
}

export const updateUser = (user: IUserUpdate) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionsTypes.USER_UPDATE_REQUEST})
        const {data} = await patch('/user', user)
        dispatch({type: UserActionsTypes.USER_UPDATE_SUCCESS, payload: data})
        dispatch({type: UserActionsTypes.USER_LOGIN_REFRESH_USER_DATA, payload: data.user})
        localStorage.setItem('user', JSON.stringify(data.user))
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_UPDATE_CLEAR_SUCCESS_FIELD})
        }, 2000)
    } catch (error: any) {
        console.log("---error---", error)
        dispatch({
            type: UserActionsTypes.USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_UPDATE_CLEAR_ERROR_FIELD})
        }, 4000)
    }
}

export const showEditFormOn = () => async (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionsTypes.USER_UPDATE_SHOW_FORM_ON})
}

export const showEditFormOff = () => async (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionsTypes.USER_UPDATE_SHOW_FORM_OFF})
}

// export const refreshUserData = (id: string) => async (dispatch: Dispatch<AuthAction>) => {
//     try {
//         dispatch({type: AuthActionsTypes.AUTH_REQUEST})
//         const {data} = await get(`/user/${id}`)
//         console.log("---register--data---", data.user)
//         dispatch({type: AuthActionsTypes.AUTH_REFRESH_USER_SUCCESS, payload: data.user})
//     } catch (error: any) {
//         console.log("---error---", error)
//         dispatch({
//             type: AuthActionsTypes.AUTH_ERROR,
//             payload:
//                 error.response && error.response.data.msg
//                     ? error.response.data.msg
//                     : error.message
//         })
//     }
// }

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