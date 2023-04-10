import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background: rgb(40,35,198);
   background: radial-gradient(circle, rgba(40,35,198,1) 53%, rgba(252,70,70,1) 100%);
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