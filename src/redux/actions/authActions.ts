import {AuthAction, AuthActionsTypes} from "../types/authTypes";
import {IUserRegister} from "../types/userTypes";
import {Dispatch} from "redux";
import {post} from "../../services/fetchData";


export const register = (user: IUserRegister) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        const {data} = await post('/register', user)
        console.log("---register--data---", data.msg)
        dispatch({type: AuthActionsTypes.REGISTER_USER, payload: data})
    } catch (err: any) {
        console.log(`some error - ${err.message}`)
    }
}