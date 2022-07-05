import * as UserActionCreators from './userActions';
import * as PostActionCreators from './postActions';
import * as CommentActionCreators from './commentActions';
import * as NotificationCreators from './notificationActions';
import * as FriendshipCreators from './friendshipActions';
import * as MessageCreators from './messageActions';
import * as ConversationCreators from './conversationActions';
import * as GlobalActionsCreators from './globalActions';


export default {
    ...UserActionCreators,
    ...PostActionCreators,
    ...CommentActionCreators,
    ...NotificationCreators,
    ...FriendshipCreators,
    ...MessageCreators,
    ...ConversationCreators,
    ...GlobalActionsCreators,
}