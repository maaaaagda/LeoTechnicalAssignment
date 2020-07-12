import React, { ChangeEvent } from 'react'
import { UsersSearchInput } from './styled'

type SearchProps = {
    onSearch: (searchText: string) => void;
}

const UsersSearch: React.FC<SearchProps> = ({ onSearch }) => {

    const onChange: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
        onSearch(event.target.value)
    }
    return <UsersSearchInput placeholder="Search by user name..." onChange={onChange}/>
}

export default UsersSearch