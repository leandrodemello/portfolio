import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: #c5c4c4;
}

*::-webkit-scrollbar-thumb {
  background-color: #03FA6E;
  border-radius: 1.0rem;
}

:root {
  font-size: 65%;

}

body {
  color: #eaeaea;
  background-color: #000000;

}

body, input, button, textarea {
  font-family: monospace;

}

button, a {
  cursor: pointer;
  border: none;
  text-decoration: none;

}

a { 
   color: currentColor;
}
  
`;