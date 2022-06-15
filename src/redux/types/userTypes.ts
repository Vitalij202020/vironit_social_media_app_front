export interface IUserRegister {
    firstName: string;
    lastName: string;
    sex: string;
    dateOfBirth: string;
    nickName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserUpdate {
    firstName: string;
    lastName: string;
    sex: string;
    story: string;
    dateOfBirth: string;
    nickName: string;
    email: string;
}

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    sex: string;
    dateOfBirth: string;
    story: string;
    nickName: string;
    email: string;
    password?: string;
}

export interface UserState {
    loading: boolean;
    error: null | string;
    success: null | string;
}

export enum UserActionsTypes {
    USER_FETCH_REQUEST = 'USER_FETCH_REQUEST',
    USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
    GER_USER_SUCCESS = 'GER_USER_SUCCESS',
    USER_FETCH_ERROR = 'USER_FETCH_ERROR',
}

interface UserFetchRequest {
    type: UserActionsTypes.USER_FETCH_REQUEST;
}

interface UserUpdateSuccess {
    type: UserActionsTypes.USER_UPDATE_SUCCESS;
    payload: string;
}

interface UserUpdateSuccess {
    type: UserActionsTypes.USER_UPDATE_SUCCESS;
    payload: string;
}

interface UserFetchError {
    type: UserActionsTypes.USER_FETCH_ERROR;
    payload: string;
}

export type UserAction =
    UserFetchRequest
    | UserUpdateSuccess
    | UserFetchError