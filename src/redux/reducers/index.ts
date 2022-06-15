import {combineReducers} from "redux";
import auth from './authReducer';
import user from './authReducer';

export const rootReducer = combineReducers({
    auth,
    user
})

export type RootState = ReturnType<typeof rootReducer>