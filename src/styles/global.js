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
  background-color:  ${props => props.theme.body};

 }

 body, input, button, textarea {
  font-family: 'Roboto Slab', serif;

 } 

 a {
   text-decoration: none;
   color: ${props => props.theme.fontColor};
 }

 button, a {
   border: none;
   cursor: pointer;

 }

  
`;