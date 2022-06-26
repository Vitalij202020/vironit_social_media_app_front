import {combineReducers} from "redux";
import {IUserLoginState, IUserRegisterState, IUserUpdateState} from "../types/userTypes";
import {userLoginReducer, userRegisterReducer, userUpdateReducer} from "./userReducer";
import {IPostCreateState, IPostLikeState, IPostListState} from "../types/postTypes";
import {postCreateReducer, postLikeReducer, postListReducer} from "./postReducer";
import {ICommentState} from "../types/commentTypes";
import {commentReducer} from "./commentReducer";
import {IGlobalState} from "../types/globalTypes";
import {globalReducer} from "./globalReducer";

export interface IAppState {
    userRegister: IUserRegisterState;
    userLogin: IUserLoginState;
    userUpdate: IUserUpdateState;
    postCreate: IPostCreateState;
    postList: IPostListState;
    postLike: IPostLikeState;
    comment: ICommentState;
    global: IGlobalState;
}

export const rootReducer = combineReducers<IAppState>({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userUpdate: userUpdateReducer,
    postCreate: postCreateReducer,
    postList: postListReducer,
    postLike: postLikeReducer,
    comment: commentReducer,
    global: globalReducer,
})

export type RootState = ReturnType<typeof rootReducer>