import styled from 'styled-components';

export const Container = styled.div`
div {
   text-align: center;
   color: black;

   margin-top: 100px;
}

img {
   margin-bottom: 20px;
   border-style: solid;
   border-width: 3px;
   border-radius: 50%;
   animation: mymove 5s infinite;
   border-color: #d41818;

  @keyframes mymove {
  50% {border-color: LightSkyBlue;}
}

}

h1 {
  font-size: 43px;
  color: #0B3E60;
}

p {
   font-size: 20px;
   margin-top: 10px;
   color: #425F88;
}

button {
   font-weight: 700;
   height: 30px;
   width: 120px;
   border-radius: 8px;
   border: none;

   margin-top: 20px;
   
   font-size: 14px;
   color: black;

   
   background: #58a1d6;
   
}
`;
