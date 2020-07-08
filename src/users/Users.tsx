import React, { useState, useEffect } from 'react';
import UserRow from './UserRow';
import IUser from './types/IUser'
import { getUsers } from '../api/users';
import UsersSearch from './SearchUsers';

const Users: React.FC = () => {
    const [ users, setUsers ] = useState([] as IUser[]);
    const [ filteredUsers, setFilteredUsers ] = useState([] as IUser[]);

    useEffect(() => {
      (async (): Promise<void> => {
        const users: IUser[] = await getUsers();
        setUsers(users)
        setFilteredUsers(users)
      })()
    }, [])

    const onSearch = (text: string) => {
      if(text) {
        const filteredUsers: IUser[] = users.filter(user => text && user.name.toLowerCase().includes(text.toLowerCase()))
        setFilteredUsers(filteredUsers)
      } else {
        setFilteredUsers(users)
      }
    }

    return <div className="users-container">
        <h1 className="users-header">Users list</h1>
        <UsersSearch onSearch={onSearch}/>
        <div className="users">
          {filteredUsers.map((user: IUser) => <UserRow key={user.id} id={user.id} name={user.name} username={user.username}/>)}
        </div>
    </div>
}

export default Users;