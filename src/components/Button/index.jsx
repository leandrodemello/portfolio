import { useState } from "react";

import { Container } from "./styles";

import { TbSunOff, TbSun } from 'react-icons/tb';
import { lightTheme , darkTheme } from '../../styles/theme';


export function DarkMode(){
  const [theme, setTheme] = useState();

  function switchTheme() {
    if (theme ===darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }

  return (
    <Container>
        <button onClick={switchTheme}>
          {theme === darkTheme ? (
            <TbSun size={26} />
          ) : (
            <TbSunOff size={26} />
          )}
        </button>
  
    </Container>
  );
}