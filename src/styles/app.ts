import styled from "styled-components";

export const AppContainer = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 30% 40% 30%;
    font-size: large;
    background-color: ${props => (props.theme.color.background)};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;
