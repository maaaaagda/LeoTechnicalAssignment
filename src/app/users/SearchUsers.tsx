import React, { ChangeEvent } from 'react'

interface ISearchProps {
    onSearch: (searchText: string) => void;
}

const UsersSearch: React.FC<ISearchProps> = ({ onSearch }) => {

    const onChange: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
        onSearch(event.target.value)
    }
    return <input className="users-search" placeholder="Search by user name..." onChange={onChange}/>
}

export default UsersSearch