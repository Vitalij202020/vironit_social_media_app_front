import {IMessageState, MessageActions, MessageActionsTypes} from "../types/messageTypes";

const initialMessageState: IMessageState = {
    messages: []

}

export const messageReducer = (state: IMessageState = initialMessageState, action: MessageActions ): IMessageState => {
    switch (action.type) {
        // case MessageActionsTypes.MESSAGE_CREATE:
        //     return {
        //         ...state,
        //         messages: action.payload
        //     }
        case MessageActionsTypes.MESSAGE_GET:
            return {
                ...state,
                messages: action.payload
            }
        case MessageActionsTypes.MESSAGE_DELETE:
            return {
                ...state,
                // messages: state.messages.filter(item => item._id !== action.payload),
            }
        default:
            return state;
    }
}