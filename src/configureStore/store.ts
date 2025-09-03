import type {IcqInterface} from "../utils/constants.ts";
import {icqReducer} from "../reducers/icqReducer.ts";
import {legacy_createStore as createStore} from "redux";

const initialState:IcqInterface = {
    user: {
        name: 'Monster',
        avatar: "https://gravatar.com/avatar/000?d=monsterid"
    },
    stats: {
        followers: 0,
        following: 0
    }
}

export const store = createStore(icqReducer,initialState);