import React, { useState, useMemo, useEffect } from 'react';
import UserRow from './UserRow';
import IUser from './types/IUser'
import UsersSearch from './SearchUsers';
import { connect } from 'react-redux';
import { IUsersState, IGetUsersAction } from "./store/types"
import { fetchUsers } from './store/actions';
import { ThunkDispatch } from 'redux-thunk';
import { UsersContainer, UsersHeader, UsersList } from './styled';

const Users: React.FC<{ users: IUser[], loadingUsersError: string, loadingUsers: boolean, dispatch: ThunkDispatch<{}, {}, IGetUsersAction> }> 
  = ({ users, loadingUsers, loadingUsersError, dispatch }) => {

  const [searchPhrase, setSearchPhrase] = useState("")
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const filteredUsers = useMemo(() => {
    return users.filter(user => !searchPhrase || user.name.toLowerCase().includes(searchPhrase.toLowerCase()))
  }, [users, searchPhrase])

  return <UsersContainer>
      <UsersHeader>Users list</UsersHeader>
      {loadingUsers ? <p>Loading...</p> : 
      <>
        <UsersSearch onSearch={text => setSearchPhrase(text)}/>
        <UsersList>
          {filteredUsers.map((user: IUser) => <UserRow key={user.id} id={user.id} name={user.name} username={user.username}/>)}
        </UsersList>
      </>
    }
    {loadingUsersError && <p className="error">{loadingUsersError}</p>}
  </UsersContainer>
}

const mapStateToProps = (state: IUsersState) => ({
  users: state.users,
  loadingUsers: state.loading,
  loadingUsersError: state.error
})

export default connect(mapStateToProps)(Users);