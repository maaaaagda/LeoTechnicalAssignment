import React from 'react';
import './styles/app.ts';
import Users from './users/Users';
import { ThemeProvider } from 'styled-components';
import { fancyTheme } from './styles/theme';
import { AppContainer } from './styles/app';

function App() {
  return (
    <ThemeProvider theme={fancyTheme}>
      <AppContainer>
          <Users/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
