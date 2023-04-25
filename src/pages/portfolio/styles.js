import styled from "styled-components";

export const Container = styled.div`
min-width: 425px;

a { 
   color: currentColor;
   }


.page {
   margin: 0 auto;

}

main {
   grid-template-areas: "A" "B" "C"
      "D" "E" "F";
}
   
main div:nth-child(1) {
   grid-area: A;
   background-color: #9aa9af;
   height: 270px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa
   
}
main div:nth-child(2) {
   grid-area: B;
   background-color: #9aa9af;   
   height: 270px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa
   
}
main div:nth-child(3) {
   grid-area: C;
   background-color: #9aa9af;
   height: 270px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa

}
main div:nth-child(4) {
   grid-area: D;
   background-color: #9aa9af;
   height: 270px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa

}
main div:nth-child(5) {
   grid-area: E;
   background-color: #9aa9af;
   height: 270px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa

}
main div:nth-child(6) {
   grid-area: F;
   background-color: #0f172a;
   height: 270px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa

}

main::-webkit-scrollbar{
   width: 0.5rem;
   border: 3px;
   background-color: #687b82;
}

main::-webkit-scrollbar-thumb{
   border-radius: 1.0rem;
   background-color: #3b82f6;
}

main {
   margin-top: 10px;
   height: 900px; //altura vertical do scrollbar
   display: grid;
   gap: 1.0rem;
   border-radius: 5px;
   overflow-y: scroll;

}

h1 {
   font-size: 4.0rem;
   color: ${props => props.theme.fontColor};
   margin-top: 5.0rem;   //pc 10.0rem
   margin-bottom: 3.0rem;

   text-align: center;

   line-height: 6.0rem;
   letter-spacing: 1px;
}

.card {
   position: relative;
   border-radius: 3px;
   height: 360px;
}

.card img {
   height: 15.0rem;  // altura vertical da imagem 23.0rem  pc 
   width: 25.0rem;   // largura horizontal da imagem 38.rem  pc
   object-fit: cover;

   border-radius: 3px;

   transition: transform 200ms;

   margin: 12px 20px 0 20px; 
   
   opacity: 0.7;
}

.card img:hover {
   transform: scale(1.1);
   opacity: 1;

}

.card h2 {
   position: absolute;
   width: 100%;

   font-size: 18px;
   font-weight: 400;

   padding-right: 2.0rem;
   padding-left: 2.0rem;

   display: flex;
   flex-direction: column;
   text-align: end;

   color: ${props => props.theme.fontColor};
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
   font-size: 12px;
   border-radius: 7px;
   background-color: #ffff;
   color: black;
   height: 2.6rem;
   padding: 0 1.0rem;
   
   border: none;
   
}

img {
   width: 100%;
   height: auto;
}



.card-end {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 0.5rem;
   padding: 1rem;
   border-radius: 3px;

   span {
      font-size: 20px;
      font-weight: 700;
      color: #f0f9ff;
   }

   p {
      font-size: 15px;
      text-align: center;
      color: #94a3b8;
   }

   .icon-port {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px;
      padding: 10px;
      height: 50px; //altura vertical do cinza
      width: 100%;  // largura horizontal do cinza
      border-radius: 5px;
      background-color: #0f172a;
      
      button {
         display: flex;
         justify-content: center;
         align-items: center;
         font-size: 25px;
         
         height: 30px;
         width: 115px;
         gap: 10px;
         
         color: #f0f9ff;
         background-color: #3b82f6;
         border-radius: 5px;

         p {
            color: #f0f9ff;
            font-weight: 800;

         }
         
      }

      button:hover {
         transition: .15s;
         cursor: pointer;
         background-color: #0a4dba;
      }

   }


}

@media (min-width: 768px) {
   .page {
      max-width: 1020px;
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
       text-align: end;
       margin-right: 40px;

   }
}
   
@media (min-width: 1020px) {
   .page {
      max-width: 1500px;
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
      background-color: #9aa9af;
      height: 340px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
      
   }
   main div:nth-child(2) {
      grid-area: B;
      background-color: #9aa9af;   
      height: 340px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
      
   }
   main div:nth-child(3) {
      grid-area: C;
      background-color: #9aa9af;
      height: 340px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
   }
   main div:nth-child(4) {
      grid-area: D;
      background-color: #9aa9af;
      height: 340px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
   }
   main div:nth-child(5) {
      grid-area: E;
      background-color: #9aa9af;
      height: 340px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
   }
   main div:nth-child(6) {
      grid-area: F;
      background-color: #0f172a;
      height: 340px; //altura vertical do cinza
      width: 435px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
   }

   .card img {
      height: 23.0rem;  // altura vertical da imagem 23.0rem  pc 
      width: 38.0rem;   // largura horizontal da imagem 38.rem  pc
   
   }

   .card h2 {
   font-size: 20px;
   width: 100%;
   //background-color: #3fa1e8;
   }

   .card p {
   font-size: 15px;
   
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






