import React from "react";
import { UserInfoSecondary, UserInfo } from "./styled";

type UserRowProps = {
    id: number,
    name: string,
    username: string
}

const UserRow: React.FC<UserRowProps> = ({id, name, username}) => {
    return <UserInfoSecondary>
        <span>{id}. </span><UserInfo>{name} </UserInfo><span>@{username}</span>
    </UserInfoSecondary>
}

export default UserRow;
