import * as AuthActionCreators from './authActions';
import * as UserActionCreators from './userActions';

export default {
    ...AuthActionCreators,
    ...UserActionCreators
}