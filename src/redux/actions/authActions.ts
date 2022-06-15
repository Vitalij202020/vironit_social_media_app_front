import {AuthAction, AuthActionsTypes} from "../types/authTypes";
import {IUserLogin, IUserRegister} from "../types/userTypes";
import {Dispatch} from "redux";
import {post, get} from "../../services/fetchData";


export const register = (user: IUserRegister) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionsTypes.AUTH_REQUEST})
        const {data} = await post('/register', user)
        console.log("---register--data---", data.msg)
        dispatch({type: AuthActionsTypes.AUTH_SUCCESS, payload: data})
    } catch (error: any) {
        console.log("---error---", error)
        dispatch({
            type: AuthActionsTypes.AUTH_ERROR,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
        setTimeout(() => {
            dispatch({type: AuthActionsTypes.AUTH_ERROR, payload: ''})
        }, 4000)
    }
}

export const login = (user: IUserLogin) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionsTypes.AUTH_REQUEST})
        const {data} = await post('/login', user)
        console.log("---login--data---", data)
        dispatch({type: AuthActionsTypes.AUTH_SUCCESS, payload: data})
        localStorage.setItem('token', JSON.stringify(data.token))
    } catch (error: any) {
        console.log("---error---", error)
        dispatch({
            type: AuthActionsTypes.AUTH_ERROR,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
        setTimeout(() => {
            dispatch({type: AuthActionsTypes.AUTH_ERROR, payload: ''})
        }, 4000)
    }
}

export const refreshUserData = (id: string) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionsTypes.AUTH_REQUEST})
        const {data} = await get(`/user/${id}`)
        console.log("---register--data---", data.user)
        dispatch({type: AuthActionsTypes.AUTH_REFRESH_USER_SUCCESS, payload: data.user})
    } catch (error: any) {
        console.log("---error---", error)
        dispatch({
            type: AuthActionsTypes.AUTH_ERROR,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
    }
}