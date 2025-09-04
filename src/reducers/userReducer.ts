import {CHANGE_AVATAR} from "../actions/icqActions.ts";
import type {ActionInterface} from "../utils/constants.ts";

const defaultState = {
    name: 'Monster',
    avatar: "https://gravatar.com/avatar/000?d=monsterid"
};

export const userReducer = (state = defaultState, action: ActionInterface) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {
                ...state,
                avatar: action.payload || state.avatar
            }
        default:
            return state;
    }
}