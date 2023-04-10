import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import temas from './styles/temas';
import Global from './styles/global';

import { Details } from './pages/home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <Global />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
