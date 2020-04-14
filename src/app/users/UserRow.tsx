import React from "react";

type UserRowProps = {
    id: number,
    name: string,
    username: string
}

const UserRow: React.FC<UserRowProps> = ({id, name, username}) => {
    return <p className="user-info-secondary">
        <span>{id}. </span><span className="user-info">{name} </span><span>@{username}</span>
    </p>
}

export default UserRow;
