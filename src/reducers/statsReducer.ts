import type {ActionInterface} from "../utils/constants.ts";
import {CHANGE_STATS} from "../actions/icqActions.ts";

const defaultState = {
    followers: 0,
    following: 0
}


export const statsReducer = (state = defaultState, action: ActionInterface) => {
    switch (action.type) {
        case CHANGE_STATS: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const res = state[action.payload.statsType] + action.payload.sum;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return {...state, [action.payload.statsType]: res >= 0 ? res : 0};
        }
        default:
            return state;
    }
}