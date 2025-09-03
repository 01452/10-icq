import {CHANGE_AVATAR} from "../actions/icqActions.ts";
import type {IcqInterface} from "../utils/constants.ts";

export const icqReducer = (state: IcqInterface, action: any) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}}
        default:
            return state;

    }
}