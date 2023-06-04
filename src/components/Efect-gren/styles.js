import styled from "styled-components";

export const Container  = styled.div`

position: absolute;
z-index: -1;

top: 40%;
left: 45%;
margin-top:-150px;
margin-left:-100px;

height: 250px;
width: 250px;

border-radius: 9999px;

--tw-bg-opacity: 1;
background-color: rgb(32,189,20,1) ;

opacity: 0.8;

filter: blur(160px);

@media (min-width: 550px) {

  top: 50%;
  left: 52%;
  margin-left:-200px;

  width: 326px;
}

`;



