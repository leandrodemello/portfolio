import { useState } from 'react';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';

import light from './styles/lightTheme';
import dark from './styles/darkTheme';

function App() {
   const [theme, setTheme] = useState(light)

   const toogleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light)
   }

   return(
      <div>
         <ThemeProvider theme={theme}>
             <Footer toogleTheme={toogleTheme}/>
             <GlobalStyle />
         </ThemeProvider>
      </div>
   );
}

export default App;