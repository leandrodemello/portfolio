import styled from 'styled-components';

export const Container = styled.div`

.home {
   text-align: center;
   padding: 10px;

   margin-top: 20px;

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
    color: ${props => props.theme.fontColor};
  }
  
  p {
     font-size: 20px;
     margin-top: 10px;
     color: ${props => props.theme.fontColor};
  }
  
  button {
     font-weight: 700;
     height: 30px;
     width: 120px;
     border-radius: 8px;
     border: none;
  
     margin-top: 20px;
     
     font-size: 14px;
     color: ${props => props.theme.fontColor};
  
     
     background: #58a1d6;
     
  }

}

@media (min-width: 768px) {
   .home {
   margin-top: 100px;
   }

   button {
   }

}
     

`;
