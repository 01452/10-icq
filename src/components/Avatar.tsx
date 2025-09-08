import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {changeAvatar} from "../features/user/userSlice.ts";

interface Props {
    size?: string
}

const Avatar = ({size}: Props) => {
    const {avatar, name} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

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