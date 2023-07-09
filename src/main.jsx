import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { EfectGalaxy } from './components/Efect-galaxy';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
        <Routes />
        

        <EfectGalaxy />

    </ThemeProvider>
  </React.StrictMode>
);