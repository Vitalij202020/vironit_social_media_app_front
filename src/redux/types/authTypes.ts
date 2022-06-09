export enum AuthActionsTypes {
    REGISTER_USER = 'REGISTER_USER',
    LOGIN_USER = 'LOGIN_USER',
}

interface FetchRegisterUser {
    type: AuthActionsTypes.REGISTER_USER;
    payload: {}
}

export type AuthAction = FetchRegisterUser