import {ConversationActions, ConversationActionsTypes, IConversationState} from "../types/conversationTypes";

const initialConversationState: IConversationState = {
    users: []
}

export const conversationReducer = (state: IConversationState = initialConversationState, action: ConversationActions ): IConversationState => {
    switch (action.type) {
        case ConversationActionsTypes.CONVERSATION_GET:
            return {
                ...state,
                users: action.payload
            }
        case ConversationActionsTypes.CONVERSATION_DELETE:
            return {
                ...state,
                users: state.users.filter(item => item._id !== action.payload),
            }

        default:
            return state;
    }
}