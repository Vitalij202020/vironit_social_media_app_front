import {combineReducers} from "redux";
import {IUserState} from "../types/userTypes";
import {userReducer} from "./userReducer";
import {IPostState} from "../types/postTypes";
import {postReducer} from "./postReducer";
import {ICommentState} from "../types/commentTypes";
import {commentReducer} from "./commentReducer";
import {IGlobalState} from "../types/globalTypes";
import {globalReducer} from "./globalReducer";
import {INotificationState} from "../types/notificationTypes";
import {notificationReducer} from "./notificationReducer";
import {IFriendshipState} from "../types/friendshipTypes";
import {friendshipReducer} from "./friendshipReducer";
import {IMessageState} from "../types/messageTypes";
import {conversationReducer} from "./conversationReducer";
import {messageReducer} from "./messageReducer";
import {IConversationState} from "../types/conversationTypes";

export interface IAppState {
    user: IUserState;
    post: IPostState;
    comment: ICommentState;
    notification: INotificationState;
    friendship: IFriendshipState;
    global: IGlobalState;
    conversation: IConversationState;
    message: IMessageState;
}

export const rootReducer = combineReducers<IAppState>({
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    notification: notificationReducer,
    friendship: friendshipReducer,
    global: globalReducer,
    conversation: conversationReducer,
    message: messageReducer
})

export type RootState = ReturnType<typeof rootReducer>