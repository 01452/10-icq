import type {StatsActionInterface} from "../utils/constants.ts";

export const CHANGE_AVATAR = "CHANGE_AVATAR";
export const CHANGE_STATS = "CHANGE_STATS";


export const changeAvatar = (url: string) => ({
    type: CHANGE_AVATAR,
    payload: url
})


export const changeStats = (statsType: string, sum: number) => ({
    type: CHANGE_STATS,
    payload: {
        statsType, sum
    } as StatsActionInterface

})