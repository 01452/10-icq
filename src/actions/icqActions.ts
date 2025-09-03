export const CHANGE_AVATAR = "CHANGE_AVATAR";

export const changeAvatar = (url: string) => ({
    type: CHANGE_AVATAR,
    payload: url
})