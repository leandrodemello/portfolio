import styled from "styled-components";

export const Container  = styled.div`

position: absolute;
z-index: -1;

top: 25%;
left: 25%;

display: flex;
flex-direction: column;
justify-content: center;

height: 250px;
width: 250px;

border-radius: 9999px;

--tw-bg-opacity: 1;
background-color: rgb(32,189,20,1) ;

opacity: 0.5;

filter: blur(160px);

@media (min-width: 550px) {

  top: 30%;
  left: 40%;
  width: 326px;
}

`;



