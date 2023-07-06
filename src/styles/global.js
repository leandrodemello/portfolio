import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 6px;
}

*::-webkit-scrollbar-track {
  background: #dadada;
}

*::-webkit-scrollbar-thumb {
  background-color: #8d9490;
  border-radius: 3px;
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