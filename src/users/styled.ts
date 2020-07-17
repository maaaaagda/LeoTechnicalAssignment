import styled from 'styled-components'

export const UserInfo = styled.span`
    color: ${props => (props.theme.color.primary)};
    font-weight: bold;
    size: 3em
`;

export const UserInfoSecondary = styled.p`
    color: ${props => (props.theme.color.secondary)};
    size: 2em  ;
`;

export const UsersContainer = styled.div`
    grid-column: 2 / 2;
    margin-top: ${props => (props.theme.margin.medium)};
    color: ${props => (props.theme.color.primary)};
`;

export const UsersHeader = styled.h1`
    text-align: center;
    font-weight: normal;
    margin: ${props => (props.theme.margin.medium)};
`;

export const UsersList = styled.div`
    text-align: start;
`;

export const UsersSearchInput = styled.input`
    height: 30px;
    padding: ${props => (props.theme.padding.small)};
    font-size: large;
   
    border: solid black;
    width: 100%;
    
    &::placeholder {
        color: ${props => (props.theme.color.secondary)};
    }
}`