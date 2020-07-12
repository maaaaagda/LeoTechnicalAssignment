import React from 'react';
import './styles/app.scss';
import Users from './users/Users';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';

function App() {
  return (
    <div className="app">
        <ThemeProvider theme={lightTheme}>
          <Users/>
        </ThemeProvider>
    </div>
  );
}

export default App;
