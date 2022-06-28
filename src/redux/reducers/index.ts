import {combineReducers} from "redux";
import {IUserState} from "../types/userTypes";
import {userReducer} from "./userReducer";
import {IPostState} from "../types/postTypes";
import {postReducer} from "./postReducer";
import {ICommentState} from "../types/commentTypes";
import {commentReducer} from "./commentReducer";
import {IGlobalState} from "../types/globalTypes";
import {globalReducer} from "./globalReducer";

export interface IAppState {
    user: IUserState;
    post: IPostState;
    comment: ICommentState;
    global: IGlobalState;
}

export const rootReducer = combineReducers<IAppState>({
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    global: globalReducer,
})

export type RootState = ReturnType<typeof rootReducer>