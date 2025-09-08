import Avatar from "./Avatar.tsx";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {changeStats} from "../features/stats/statsSlice.ts";

const Stats = () => {
    const dispatch = useAppDispatch();
    const {name} = useAppSelector(state => state.user);
    const {followers,following} = useAppSelector(state => state.stats);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                <p>Name: {name}</p>
            </div>
            <div className={'stats'}>
                <div
                    onClick={() =>
                        dispatch(changeStats("followers", 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats("followers", -1))
                    }}>Followers: {followers}</div>
                <div
                    onClick={() =>
                        dispatch(changeStats("following", 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats("following", -1))
                    }}>Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;