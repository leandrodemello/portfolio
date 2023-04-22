import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Global from './styles/global';

import { Projeto01 } from './pages/projetos/projeto-01';

import { Routes } from './routes';

import { DarkMode } from './components/Button';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <Projeto01 />
      <DarkMode />
    </ThemeProvider>
  </React.StrictMode>
)