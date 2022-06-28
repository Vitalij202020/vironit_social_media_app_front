import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {IAppState, rootReducer} from "./reducers";

const user = localStorage.getItem('user')
const userFromStorage = user ? JSON.parse(user) : null

const token = localStorage.getItem('token')
const tokenFromLocalStorage = token ? JSON.parse(token) : null

const initialState = {
    user: {
        user: userFromStorage,
        loading: false,
        error: '',
        success: '',
        showEditForm: false,
        token: tokenFromLocalStorage
    }
}

const store: Store<IAppState> = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store