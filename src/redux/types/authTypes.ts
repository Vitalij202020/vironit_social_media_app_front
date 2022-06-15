import {IUser} from "./userTypes";

interface IUserResponse {
    msg: string;
    token: string;
    user: IUser
}

export interface AuthState {
    user: null | IUser;
    loading: boolean;
    error: null | string;
    success: null | string;
    token: null | string;
}

export enum AuthActionsTypes {
    AUTH_REQUEST = 'AUTH_REQUEST',
    AUTH_SUCCESS = 'REGISTER_USER_SUCCESS',
    AUTH_REFRESH_USER_SUCCESS = 'AUTH_REFRESH_USER_SUCCESS',
    AUTH_ERROR = 'REGISTER_USER_ERROR',
}

interface AuthRequest {
    type: AuthActionsTypes.AUTH_REQUEST;
}

interface AuthSuccess {
    type: AuthActionsTypes.AUTH_SUCCESS;
    payload: IUserResponse;
}

interface AuthRefreshUserSuccess {
    type: AuthActionsTypes.AUTH_REFRESH_USER_SUCCESS;
    payload: IUser;
}

interface AuthError {
    type: AuthActionsTypes.AUTH_ERROR;
    payload: string;
}

export type AuthAction =
    AuthRequest
    | AuthSuccess
    | AuthRefreshUserSuccess
    | AuthError