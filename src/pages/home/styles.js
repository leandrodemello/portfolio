import styled from 'styled-components';

export const Container = styled.div`
  min-width: 425px;

a { 
   color: currentColor;
 }

.home {
   text-align: center;
   padding: 10px;

   margin-top: 70px;

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
     font-size: 14px;
     font-weight: 700;
     color: ${props => props.theme.fontColor};

     height: 30px;
     width: 120px;
     margin-top: 20px;
     border-radius: 3px;

     border: 1px;
     border-style: solid;
     border-color: #6ec0da;
     transition: .15s;
     
     
   }
   
   
   button:hover {
      transition: .15s;
      cursor: pointer;
      color: #FFFF;
      border: none;
      height: 35px;
      width: 140px;
      background: #3b82f6;
   }

}

@media (min-width: 768px) {
   .home {
   margin-top: 100px;
   }

}
     
`;
