import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import temas from './styles/temas';
import Global from './styles/global';

import { Home } from './pages/home';
import { About } from './pages/about';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <Global />
      <About />
    </ThemeProvider>
  </React.StrictMode>,
)
