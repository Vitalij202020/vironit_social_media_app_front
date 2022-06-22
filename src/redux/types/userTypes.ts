export enum UserActionsTypes {
    USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
    USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
    USER_REGISTER_FAIL = 'USER_REGISTER_FAIL',

    USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',
    USER_LOGIN_REFRESH_USER_DATA = 'USER_LOGIN_REFRESH_USER_DATA',
    USER_LOGIN_CLEAR_ERROR_FIELD = 'USER_LOGIN_CLEAR_ERROR_FIELD',
    USER_LOGOUT = 'USER_LOGOUT',

    USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
    USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
    USER_UPDATE_FAIL = 'USER_UPDATE_FAIL',
    USER_UPDATE_SHOW_FORM_ON = 'USER_UPDATE_SHOW_FORM_ON',
    USER_UPDATE_SHOW_FORM_OFF = 'USER_UPDATE_SHOW_FORM_OFF',
    USER_UPDATE_CLEAR_SUCCESS_FIELD = 'USER_UPDATE_CLEAR_SUCCESS_FIELD',
    USER_UPDATE_CLEAR_ERROR_FIELD = 'USER_UPDATE_CLEAR_ERROR_FIELD',
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

interface IUserLoginRefreshUserData {
    type: UserActionsTypes.USER_LOGIN_REFRESH_USER_DATA;
    payload: IUser;
}

interface IUserClearErrorField {
    type: UserActionsTypes.USER_LOGIN_CLEAR_ERROR_FIELD;
}

interface IUserLogout {
    type: UserActionsTypes.USER_LOGOUT;
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

interface IUserUpdateClearSuccessField {
    type: UserActionsTypes.USER_UPDATE_CLEAR_SUCCESS_FIELD;
}

interface IUserUpdateClearErrorField {
    type: UserActionsTypes.USER_UPDATE_CLEAR_ERROR_FIELD;
}

export type UserActions =
    IUserRegisterRequest
    | IUserRegisterSuccess
    | IUserRegisterFail
    | IUserLoginRequest
    | IUserLoginSuccess
    | IUserLoginFail
    | IUserLoginRefreshUserData
    | IUserLogout
    | IUserUpdateRequest
    | IUserUpdateSuccess
    | IUserUpdateFail
    | IUserUpdateShowFormOn
    | IUserUpdateShowFormOff
    | IUserUpdateClearSuccessField
    | IUserClearErrorField
    | IUserUpdateClearErrorField

export interface IUserRegisterState {
    loading: boolean;
    error: string;
    success: string;
}

export interface IUserLoginState {
    user: null | IUser;
    loading: boolean;
    error: string;
    success: string;
    token: null | string;
}

export interface IUserUpdateState {
    user: null | IUserUpdate;
    loading: boolean;
    error: string;
    success: string;
    showEditForm: boolean;
}