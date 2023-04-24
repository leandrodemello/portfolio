import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
  font-family: monospace;

 } 

 a {
   text-decoration: none;
   color: ${props => props.theme.fontColor};
 }

 h1 {
  color: ${props => props.theme.fontColor};
 }

 p {
  color: ${props => props.theme.fontColor};

 }

 span {
  color: ${props => props.theme.fontColor};

 }

 li {
  color: ${props => props.theme.fontColor};

 }

 button, a {
   border: none;
   cursor: pointer;

 }

  
`;