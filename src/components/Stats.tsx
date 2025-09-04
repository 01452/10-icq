import Avatar from "./Avatar.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {IcqInterface} from "../utils/constants.ts";
import {changeStats} from "../actions/icqActions.ts";

const Stats = () => {
    const {user, stats} = useSelector((state: IcqInterface) => state);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                <p>Name: {user.name}</p>
            </div>
            <div className={'stats'}>
                <div
                    onClick={() =>
                        dispatch(changeStats("followers", 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats("followers", -1))
                    }}>Followers: {stats.followers}</div>
                <div
                    onClick={() =>
                        dispatch(changeStats("following", 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats("following", -1))
                    }}>Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;