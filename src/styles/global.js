import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(233,163,148,1) 100%);

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