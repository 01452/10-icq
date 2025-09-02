import Avatar from "./Avatar.tsx";

const Stats = () => {
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                <p>Name:</p>
            </div>
            <div className={'stats'}>
                <div >Followers: 1000</div>
                <div>Following: 1000</div>
            </div>
        </div>
    );
};

export default Stats;