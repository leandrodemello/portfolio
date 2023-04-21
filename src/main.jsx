import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Global from './styles/global';

import { Routes } from './routes';

import { DarkMode } from './components/Button';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <Routes />
      <DarkMode />
    </ThemeProvider>
  </React.StrictMode>
)