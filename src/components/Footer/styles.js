import styled from "styled-components";

export const Container  = styled.footer`
bottom: 0;
left: 0;
width: 100%;

footer {

      display: flex; 
      align-items: center;
      justify-content: center;
      font-size: 16px;
      padding: 10px;
      gap: 10px;
      
      > p {
         height: 25px;
         color: #c7c7c9;

      }

      > span {
         font-size: 25px;
         color: #228bd1;
         margin-top: 5px;
      }

   }

   @media (min-width: 768px) {
      position: fixed;
   }

`;
