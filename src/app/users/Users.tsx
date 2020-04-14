import React, { useState, useEffect } from 'react';
import UserRow from './UserRow';
import IUser from './User'
import { getUsers } from '../../api/users';

const Users: React.FC = () => {
    const [ users, setUsers ] = useState([] as IUser[]);

    useEffect(() => {
      (async (): Promise<void> => {
          const users: IUser[] = await getUsers();
        setUsers(users)
      })()
    }, [])

    return <div className="users-container">
        <h1 className="users-header">Users list</h1>
        <div className="users">
          {users.map((user: IUser) => <UserRow key={user.id} id={user.id} name={user.name} username={user.username}/>)}
        </div>
    </div>
}

export default Users;