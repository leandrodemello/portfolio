import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import { lightTheme , darkTheme } from './styles/theme';
import Global from './styles/global';

import { Home } from './pages/home';
import { About } from './pages/about';
import { Portfolio } from './pages/portfolio'
import { Contact } from './pages/contact'

import { Footer } from './components/Footer'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <Global />
      <Home/>
      <Footer/>
    </ThemeProvider>
  </React.StrictMode>,
)
