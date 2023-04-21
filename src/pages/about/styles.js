import styled from "styled-components";

export const Container = styled.div`

max-width: 425px;
margin: 0 auto;

.about {
   padding: 15px;
   margin: 50px 0 100px 0;
}

h1 {
   font-size: 27px;
   color: ${props => props.theme.fontColor};
   line-height: 60px;
   text-align: right;


 }

 p {
   font-size: 23px;
   color: ${props => props.theme.fontColor};
   line-height: 30px;
   text-align: justify;

 }

 .container {
	display: flex;                  
	justify-content: flex-end;
  gap: 3px;

 }

 .item {
      font-size: 29px;
      margin: 5px;
      color: #0f91c2;
   }

 a { 
   color: currentColor;
 }

 .item:hover{
   transition: 0.5s;
   color: #7ccae8;
 }

 @media (min-width: 768px) {
   max-width: 1020px;

   .about {
    margin-left: 40px;
    margin-right: 40px;
   }

 }

 @media (min-width: 1024px) {
   max-width: 1440px;
   display: flex;
   flex-direction: column;
   align-items: center;

  .about {
  width: 864px;
      
   }

 }

 @media (min-width: 1440px) {
   max-width: 1734px;

 }


`;