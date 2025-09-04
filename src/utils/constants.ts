export interface IcqInterface {
    user: UserInterface,
    stats: StatsInterface
}

export interface UserInterface {
    name: string,
    avatar: string
}

export interface StatsInterface {
    followers: number,
    following: number
}

export interface ActionInterface {
    type: string,
    payload: string | number | StatsActionInterface
}

export interface StatsActionInterface {
    statsType: string,
    sum: number
}