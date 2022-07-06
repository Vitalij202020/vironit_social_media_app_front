import {IMessageState, MessageActions, MessageActionsTypes} from "../types/messageTypes";

const initialMessageState: IMessageState = {
    messages: [],
    recipient: undefined,
    currentMessage: null
}

export const messageReducer = (state: IMessageState = initialMessageState, action: MessageActions ): IMessageState => {
    switch (action.type) {
        case MessageActionsTypes.MESSAGE_ADD:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case MessageActionsTypes.MESSAGE_GET:
            return {
                ...state,
                messages: action.payload
            }
        case MessageActionsTypes.MESSAGE_SET_CURRENT:
            return {
                ...state,
                currentMessage: action.payload
            }
        case MessageActionsTypes.MESSAGE_SET_CURRENT_RESET:
            return {
                ...state,
                currentMessage: null
            }
        case MessageActionsTypes.MESSAGE_SET_RECIPIENT:
            return {
                ...state,
                recipient: action.payload
            }
        default:
            return state;
    }
}