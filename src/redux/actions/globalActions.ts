import {GlobalActions, GlobalActionsTypes} from "../types/globalTypes";

export const globalShowStatusActionOff = (): GlobalActions => {
    return {type: GlobalActionsTypes.GLOBAL_SHOW_STATUS_OFF}
}

export const globalClearFields = (): GlobalActions => {
    return {type: GlobalActionsTypes.GLOBAL_CLEAR_FIELDS}
}