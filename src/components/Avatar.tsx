import {useDispatch, useSelector} from "react-redux";
import type {IcqInterface, UserInterface} from "../utils/constants.ts";
import {changeAvatar} from "../actions/icqActions.ts";

interface Props {
    size?: string
}

const Avatar = ({size}: Props) => {
    const {name, avatar} = useSelector<IcqInterface>(state => state.user) as UserInterface;
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt("Enter new avatar url");
                dispatch(changeAvatar(url!));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar + ""}
            alt={name}
        />
    );
};

export default Avatar;