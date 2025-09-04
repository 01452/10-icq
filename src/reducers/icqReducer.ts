import {CHANGE_AVATAR, CHANGE_STATS} from "../actions/icqActions.ts";
import type {ActionInterface, IcqInterface} from "../utils/constants.ts";

export const icqReducer = (state: IcqInterface, action: ActionInterface) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {
                ...state, user: {
                    ...state.user,
                    avatar: action.payload || state.user.avatar
                }
            } as IcqInterface;
        case CHANGE_STATS: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const res = state.stats[action.payload.statsType] + action.payload.sum;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const stats = {...state.stats, [action.payload.statsType]: res >= 0 ? res : 0};
            return {...state, stats};
        }

        default:
            return state;

    }
}