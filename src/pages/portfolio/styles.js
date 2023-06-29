import styled from "styled-components";

export const Container = styled.div`
min-width: 425px;
margin: 0 auto;

h1 {
   font-size: 3.0rem;
   margin: 40px 0 0 10px;

   text-align: center;

   line-height: 6.0rem;
   letter-spacing: 1px;

}

main {
   height: 900px; //altura vertical do scrollbar
   display: grid;
   gap: 1.0rem;
   border-radius: 5px;
   overflow-y: scroll;

}

main {
   grid-template-areas: "A" "B" "C"
      "D" "E" "F";
}
   
main div:nth-child(1) {
   grid-area: A;
   background-color: #bfe0ce;
   height: 245px; 
   width: 300px;  
   margin: 0 auto;  
   
}
main div:nth-child(2) {
   grid-area: B;
   background-color: #bfe0ce;   
   height: 245px; 
   width: 300px;  
   margin: 0 auto;  
   
}
main div:nth-child(3) {
   grid-area: C;
   background-color: #bfe0ce;
   height: 245px; 
   width: 300px;  
   margin: 0 auto;  

}
main div:nth-child(4) {
   grid-area: D;
   background-color: #bfe0ce;
   height: 245px; 
   width: 300px;  
   margin: 0 auto;  

}
main div:nth-child(5) {
   grid-area: E;
   background-color: #bfe0ce;
   height: 245px; 
   width: 300px;  
   margin: 0 auto;  

}
main div:nth-child(6) {
   grid-area: F;
   background-color: #bfe0ce;
   height: 245px; 
   width: 300px;  
   margin: 0 auto;  
   
}

main::-webkit-scrollbar{
   width: 0.5rem;
   border: 3px;
   background-color: #d1cdcd;
}

main::-webkit-scrollbar-thumb{
   border-radius: 1.0rem;
   background-color: #03FA6E;
}

.card {
   position: relative;
   border-radius: 3px;
   height: 360px;

   
}

.card img {
   margin: 12px 20px 0 20px; 
   height: 13.0rem;  
   width: 25.0rem;   
   object-fit: cover;
   border-radius: 3px;
   transition: transform 200ms;
   opacity: 0.8;
}

.card img:hover {
   transform: scale(1.1);
   opacity: 1;
}

.card h2 {
   display: flex;
   flex-direction: column; 
   text-align: end;
   font-size: 18px;
   font-weight: 800;

   color: #000;
   
   padding-right: 2.0rem;
   padding-left: 2.0rem;
   
   position: absolute;
}

.card p {
   font-size: 12px;
   
}

.card span {
   display: flex;
   justify-content: end;
   padding-top: 3px;
   gap: 3px;

}

.card button  {
  outline: none; 
  width: max-content; 
  height: max-content; 
  background: #3b82f6; 
  padding: 6px 6px;  
  border-radius: 7px; 
  cursor: pointer; 
  text-decoration: none;
  font-size: 12px;
  font-weight: 600; 
  font-family: 'Nunito', sans-serif; 
  color: rgb(255, 255, 255); 
  transition: .2s; 
  transition-timing-function: linear; 
}

.card button:hover { 
  background-color: #316ac5;
  box-shadow: 5px 6px 0px rgb(0, 0, 0); 
}

.card-end {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 0.5rem;
   padding: 1rem;
   border-radius: 3px;

   color: #000;

   > span {
      font-size: 20px;
      font-weight: 700;
   }

   > p {
      font-size: 15px;
      text-align: center;
   }

   .icon-port {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      height: 50px; 
      width: 100%;  
      
      button {
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none; 
      width: max-content; 
      height: max-content; 
      background: #3b82f6; 
      padding: 6px 6px; 
      border-radius: 7px; 
      cursor: pointer; 
      font-weight: 700; 
      font-family: 'Nunito', sans-serif; 
      color: rgb(255, 255, 255); 
      transition: .2s; 
      transition-timing-function: linear; 
      gap: 5px;
      
      color: #f0f9ff;
         p {
            font-weight: 600;

         }
         
      }

      button:hover {
         background-color: #316ac5;
         box-shadow: 5px 6px 0px rgb(0, 0, 0);
      }

   }

}

.temp {
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 10px;
   margin-top: 6px;

   font-size: 15px;
   font-weight: 300;
   
   > .bolaVerde {
      color: #0bbd58;
   }

   > .bolaAmarela {
      color: #d4d125;
   }

}

@media (min-width: 768px) {
   .page {
      padding: 0 5.0rem;
   }
   main {
      grid-template-areas: "A B" "C
      D" "E F";
   }

   main {
      height: 500px;
      justify-content: center;
   }  

   h1 {
      font-size: 4.0rem;
       text-align: end;
       padding: 10px;
       margin: 10px 40px;

   }

}
   
@media (min-width: 1020px) {
   .page {
      padding: 0 40px;
   }
   main {
      grid-template-areas: "A B" "C
      D" "E F";
   }

   main {
      height: 365px;  
   }  

   main div:nth-child(1) {
      grid-area: A;
      height: 325px; 
      width: 435px;  
      
   }
   main div:nth-child(2) {
      grid-area: B;
      height: 325px; 
      width: 435px;  
   
      
   }
   main div:nth-child(3) {
      grid-area: C;
      height: 325px; 
      width: 435px;  
   
   }
   main div:nth-child(4) {
      grid-area: D;
      height: 325px; 
      width: 435px;  
   
   }
   main div:nth-child(5) {
      grid-area: E;
      height: 325px; 
      width: 435px;  
   
   }
   main div:nth-child(6) {
      grid-area: F;
      height: 310px; 
      width: 435px;     
   }

   .card img {
      height: 20.0rem;  
      width: 38.0rem;   
   
   }

   .card h2 {
   font-size: 20px;
   width: 100%;
   }

   .card p {
   font-size: 15px;
   
   }

   .card button  {
      font-size: 13px;
      padding: 7px 10px;
    
   }

}

@media (min-width: 1440px) {
   .page {
      padding: 0 40px;
   }

   h1 {
   margin-top: 40px;
   margin-bottom: 30px;

   }
   main {
      grid-template-areas: "A B C" "D E F";
   }
}
`;