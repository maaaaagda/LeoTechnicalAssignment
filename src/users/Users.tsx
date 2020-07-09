import React, { useState, useMemo } from 'react';
import UserRow from './UserRow';
import IUser from './types/IUser'
import UsersSearch from './SearchUsers';
import { connect } from 'react-redux';
import { IUsersState } from "./store/types"

const Users: React.FC<{ users: IUser[] }> = ({ users }) => {

  const [searchPhrase, setSearchPhrase] = useState("")

  const filteredUsers = useMemo(() => {
    return users.filter(user => searchPhrase && user.name.toLowerCase().includes(searchPhrase.toLowerCase()))
  }, [users, searchPhrase])

  return <div className="users-container">
      <h1 className="users-header">Users list</h1>
      <UsersSearch onSearch={text => setSearchPhrase(text)}/>
      <div className="users">
        {filteredUsers.map((user: IUser) => <UserRow key={user.id} id={user.id} name={user.name} username={user.username}/>)}
      </div>
  </div>
}

const mapStateToProps = (state: IUsersState) => ({
  users: state.users,
  loadingUsers: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(Users);