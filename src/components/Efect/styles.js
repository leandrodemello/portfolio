import styled from "styled-components";

export const Container  = styled.div`

position: absolute;
z-index: -1;

top: 50%;
left: 50%;
margin-top:-150px;
margin-left:-100px;

height: 250px;
width: 250px;

border-radius: 9999px;

--tw-bg-opacity: 1;
background-color: rgb(32,189,20,1) ;

opacity: 0.5;

filter: blur(120px);

@media (min-width: 550px) {

  margin-top:-180px;
  margin-left:-200px;

  height: 250px;
  width: 326px;

  filter: blur(145px);

}

`;



