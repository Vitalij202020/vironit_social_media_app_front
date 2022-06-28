export enum UserActionsTypes {
    USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
    USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
    USER_REGISTER_FAIL = 'USER_REGISTER_FAIL',

    USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',

    USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
    USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
    USER_UPDATE_FAIL = 'USER_UPDATE_FAIL',
    USER_UPDATE_SHOW_FORM_ON = 'USER_UPDATE_SHOW_FORM_ON',
    USER_UPDATE_SHOW_FORM_OFF = 'USER_UPDATE_SHOW_FORM_OFF',

    USER_CLEAR_FIELDS = 'USER_CLEAR_FIELDS',
    USER_LOGOUT = 'USER_LOGOUT',
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
    avatar?: string;
}

export interface IUserState {
    loading: boolean;
    error: string;
    success: string;
    user: null | IUser;
    showEditForm: boolean;
    token: null | string;
}

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

interface IUserLoginResponse {
    msg: string;
    token: string;
    user: IUser
}

interface IUserUpdateResponse {
    msg: string;
    user: IUser
}

export interface IUserUpdate {
    firstName: string;
    lastName: string;
    story: string;
    dateOfBirth: string;
    nickName: string;
    email: string;
    avatar?: string;
}

interface IUserRegisterRequest {
    type: UserActionsTypes.USER_REGISTER_REQUEST;
}

interface IUserRegisterSuccess {
    type: UserActionsTypes.USER_REGISTER_SUCCESS;
    payload: string;
}

interface IUserRegisterFail {
    type: UserActionsTypes.USER_REGISTER_FAIL;
    payload: string;
}

interface IUserLoginRequest {
    type: UserActionsTypes.USER_LOGIN_REQUEST;
}

interface IUserLoginSuccess {
    type: UserActionsTypes.USER_LOGIN_SUCCESS;
    payload: IUserLoginResponse;
}

interface IUserLoginFail {
    type: UserActionsTypes.USER_LOGIN_FAIL;
    payload: string;
}

interface IUserUpdateRequest {
    type: UserActionsTypes.USER_UPDATE_REQUEST;
}

interface IUserUpdateSuccess {
    type: UserActionsTypes.USER_UPDATE_SUCCESS;
    payload: IUserUpdateResponse;
}

interface IUserUpdateFail {
    type: UserActionsTypes.USER_UPDATE_FAIL;
    payload: string;
}

interface IUserUpdateShowFormOn {
    type: UserActionsTypes.USER_UPDATE_SHOW_FORM_ON;
}

interface IUserUpdateShowFormOff {
    type: UserActionsTypes.USER_UPDATE_SHOW_FORM_OFF;
}

interface IUserClearFields {
    type: UserActionsTypes.USER_CLEAR_FIELDS;
}

interface IUserLogout {
    type: UserActionsTypes.USER_LOGOUT;
}

export type UserActions =
    IUserRegisterRequest
    | IUserRegisterSuccess
    | IUserRegisterFail
    | IUserLoginRequest
    | IUserLoginSuccess
    | IUserLoginFail
    | IUserUpdateRequest
    | IUserUpdateSuccess
    | IUserUpdateFail
    | IUserUpdateShowFormOn
    | IUserUpdateShowFormOff
    | IUserClearFields
    | IUserLogout