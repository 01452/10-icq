import Avatar from "./Avatar.tsx";
import {useContext} from "react";
import {IcqContext} from "../utils/context.ts";

const Stats = () => {
    const {user, stats, setStats} = useContext(IcqContext);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {/*<p>Name: {user.name}</p>*/}
            </div>
            <div className={'stats'}>
                {/*<div*/}
                {/*    onClick={() => setStats((prevState) =>*/}
                {/*        ({...prevState, followers: prevState.followers + 1}))}*/}
                {/*    onContextMenu={(e) => {*/}
                {/*        e.preventDefault();*/}
                {/*        setStats((prevState) =>*/}
                {/*            ({...prevState, followers: prevState.followers - 1}))*/}
                {/*    }}>Followers: {stats.followers}</div>*/}
                {/*<div*/}
                {/*    onClick={() => setStats((prevState) =>*/}
                {/*        ({...prevState, following: prevState.following + 1}))}*/}
                {/*    onContextMenu={(e) => {*/}
                {/*        e.preventDefault();*/}
                {/*        setStats((prevState) =>*/}
                {/*            ({...prevState, following: prevState.following - 1}))*/}
                {/*    }}>Following: {stats.following}</div>*/}
            </div>
        </div>
    );
};

export default Stats;