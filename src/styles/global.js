import backgroundImg from '../assets/background.png';
import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

:root {
  font-size: 65%;

}

body {
  color: #FFFF;
  //background-color: #262628;
  background: url(${backgroundImg}) no-repeat fixed;
  background-size: cover;

}

body, input, button, textarea {
  font-family: monospace;

}

button, a {
  cursor: pointer;
  text-decoration: none;

}

a { 
   color: currentColor;
}
  
`;