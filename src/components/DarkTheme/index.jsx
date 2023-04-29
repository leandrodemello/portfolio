import { useContext } from "react";
import { Container } from "./styles";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";

import { BsLightbulb } from "react-icons/bs"


export function Footer({ toogleTheme }) {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <BsLightbulb />
      <Switch 
        onChange={toogleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={35}
        handleDiameter={20}
        offColor="#b1b1d8"
        onColor="#fff"
        offHandleColor="#3b82f6"
        onHandleColor="#6b7785"
      />

    </Container>
  );
}

