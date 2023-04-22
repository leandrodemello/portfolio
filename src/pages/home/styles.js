import styled from 'styled-components';

export const Container = styled.div`

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
     
   }
   
   
   button:hover {
      cursor: pointer;
      color: #FFFF;
      border: none;
      height: 35px;
      width: 140px;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(103,106,214,1) 64%, rgba(0,212,255,1) 100%);
   }

}

@media (min-width: 768px) {
   .home {
   margin-top: 100px;
   }

}
     
`;
