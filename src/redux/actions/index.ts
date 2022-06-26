import * as UserActionCreators from './userActions';
import * as PostActionCreators from './postActions';
import * as CommentActionCreators from './commentActions';
import * as GlobalActionsCreators from './globalActions';


export default {
    ...UserActionCreators,
    ...PostActionCreators,
    ...CommentActionCreators,
    ...GlobalActionsCreators
}