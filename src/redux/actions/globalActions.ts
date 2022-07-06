import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";
import {Socket} from "socket.io-client";

export const globalShowStatusActionOff = (): GlobalActions => {
    return {type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_OFF}
}

export const globalClearFields = (): GlobalActions => {
    return {type: GlobalActionsTypes.GLOBAL_CLEAR_FIELDS}
}

export const globalMessageFlag = (): GlobalActions => {
    return {type: GlobalActionsTypes.GLOBAL_MESSAGE_FLAG}
}

export const globalSocket = (socketIo: Socket): GlobalActions => {
    return {type: GlobalActionsTypes.GLOBAL_SOCKET, payload: socketIo}
}