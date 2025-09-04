import {combineReducers} from "redux";
import {userReducer} from "./userReducer.ts";
import {statsReducer} from "./statsReducer.ts";


export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})