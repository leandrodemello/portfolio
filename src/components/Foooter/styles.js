import styled from "styled-components";

export const Container  = styled.footer`

footer {

      display: flex; 
      align-items: center;
      justify-content: center;
      font-size: 15px;
      padding: 10px;
      gap: 10px;
      margin-top: 40px;
      
      color: ${props => props.theme.fontColor};
      
      
      p {
         height: 25px;
      }

   }

`;