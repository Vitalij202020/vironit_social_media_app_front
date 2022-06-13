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

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    sex: string;
    dateOfBirth: string;
    nickName: string;
    email: string;
    password?: string;
}