import {combineReducers} from "redux";
import {IUserLoginState, IUserRegisterState, IUserUpdateState} from "../types/userTypes";
import {userLoginReducer, userRegisterReducer, userUpdateReducer} from "./userReducer";

export interface IAppState {
    userRegister: IUserRegisterState;
    userLogin: IUserLoginState;
    userUpdate: IUserUpdateState;
}

export const rootReducer = combineReducers<IAppState>({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userUpdate: userUpdateReducer,
})

export type RootState = ReturnType<typeof rootReducer>