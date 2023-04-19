import styled from "styled-components";

export const Container = styled.div`

max-width: 425px;
margin: 0 auto;

.about {
   padding: 15px;
}

h1 {
font-size: 27px;
   color: black;
   line-height: 60px;
   text-align: right;

   margin-top: 50px;

 }

 p {
   font-size: 23px;
   color: black;
   line-height: 30px;
   text-align: justify;

   padding: 15px;

 }

 .container {
	display: flex;                  
	justify-content: flex-end;

   padding: 10px;
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
      margin-left: 80px;
      margin-right: 80px;
   }


 }

 @media (min-width: 1024px) {
   max-width: 1440px;

   .about {
      
      margin-left: 80px;
      width: 864px;
      
   }

 }

 @media (min-width: 1440px) {
   max-width: 1734px;

   .about {
      margin-left: 250px;
   }
 }


`;