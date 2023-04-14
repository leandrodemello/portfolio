import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
  background: #FFFF;
  //background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,94,1) 19%, rgba(0,212,255,1) 100%);
 }

 body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
 } 

 a {
   text-decoration: none;
 }

 button, a {
   cursor: pointer;
   transition: filter 0.2s;
 }

 button:hover ,a:hover {
  filter: brightness(0.9);
 }
`;