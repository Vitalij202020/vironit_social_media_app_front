import {IUser, IUserUpdate, UserAction, UserActionsTypes} from "../types/userTypes";
import {Dispatch} from "redux";
import {patch} from "../../services/fetchData";
import {refreshUserData} from "./authActions";

export const userDataUpdate = (user: IUserUpdate) => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionsTypes.USER_FETCH_REQUEST})
        const {data} = await patch('/user', user)
        console.log("---updateUser--msg---", data.msg)
        dispatch({type: UserActionsTypes.USER_UPDATE_SUCCESS, payload: data.msg})
        refreshUserData(data.id)
    } catch (error: any) {
        console.log("---error---", error)
        dispatch({
            type: UserActionsTypes.USER_FETCH_ERROR,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
        })
        setTimeout(() => {
            dispatch({type: UserActionsTypes.USER_FETCH_ERROR, payload: ''})
        }, 4000)
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