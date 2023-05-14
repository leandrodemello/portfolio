import styled from "styled-components";

export const Container = styled.div`
min-width: 425px;
margin: 0 auto;

h1 {
   font-size: 3.0rem;
   margin: 10px;

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
   height: 240px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa
   
}
main div:nth-child(2) {
   grid-area: B;
   background-color: #bfe0ce;   
   height: 240px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa
   
}
main div:nth-child(3) {
   grid-area: C;
   background-color: #bfe0ce;
   height: 240px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa

}
main div:nth-child(4) {
   grid-area: D;
   background-color: #bfe0ce;
   height: 240px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa

}
main div:nth-child(5) {
   grid-area: E;
   background-color: #bfe0ce;
   height: 240px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa

}
main div:nth-child(6) {
   grid-area: F;
   background-color: #bfe0ce;
   height: 240px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa
   
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
   height: 13.0rem;  // altura vertical da imagem 23.0rem  pc 
   width: 25.0rem;   // largura horizontal da imagem 38.rem  pc
   object-fit: cover;
   
   border-radius: 3px;
   
   transition: transform 200ms;
   opacity: 0.7;
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
   width: 100%;

   
   padding-right: 2.0rem;
   padding-left: 2.0rem;
   
   position: absolute;
}

.card p {
   font-size: 12px;
   
}

.card span {
   display: flex;
   justify-content: flex-end;
   padding-top: 3px;
   gap: 5px;

}

.card button  {
   font-size: 9px;
   font-weight: 600;

   border-radius: 5px;
   background-color: #ffff;
   height: 2.6rem;
   padding: 0 1.0rem;
   
   border: none;
}

.card-end {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 0.5rem;
   padding: 1rem;
   border-radius: 3px;
   font-weight: 800;

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
      gap: 10px;
      height: 50px; //altura vertical do cinza
      width: 100%;  // largura horizontal do cinza
      
      button {
         display: flex;
         justify-content: center;
         align-items: center;

         font-size: 19px;
         gap: 5px;
         width: 115px;
         height: 30px;
         
         color: #f0f9ff;
         background-color: #3b82f6;

         border: none;
         border-radius: 5px;

         p {
            font-weight: 800;

         }
         
      }

      button:hover {
         cursor: pointer;
         background-color: #316ac5;
         transition: 0.5s;
      }

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
      height: 310px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
      
   }
   main div:nth-child(2) {
      grid-area: B;
      height: 310px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
   
      
   }
   main div:nth-child(3) {
      grid-area: C;
      height: 310px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
   
   }
   main div:nth-child(4) {
      grid-area: D;
      height: 310px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
   
   }
   main div:nth-child(5) {
      grid-area: E;
      height: 310px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
   
   }
   main div:nth-child(6) {
      grid-area: F;
      height: 310px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
   
   }

   .card img {
      height: 20.0rem;  // altura vertical da imagem 23.0rem  pc 
      width: 38.0rem;   // largura horizontal da imagem 38.rem  pc
   
   }

   .card h2 {
   font-size: 20px;
   width: 100%;
   }

   .card p {
   font-size: 15px;
   
   }

   .card button  {
      font-size: 12px;
    
   }

}

@media (min-width: 1440px) {
   .page {
      padding: 0 40px;
   }
   main {
      grid-template-areas: "A B C" "D E F";
   }
}
`;






