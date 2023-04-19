import { useState } from "react";
import { TbSunOff, TbSun } from 'react-icons/tb';
import { Container } from "./styles";
import { ThemeProvider } from "styled-components";

export function Footer(){
   const [theme, setTheme] = useState("light");

   const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
   };

  return (
    <Container>
        <button onClick={themeToggler}>
            <TbSun size={30}  />
            <TbSunOff size={30}  />
        </button>
  
    </Container>
  );
}