import styled from "styled-components";

export const Container = styled.div`

.page {
   max-width: 425px;
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
   background-color: #9aa9af;
   height: 270px; //altura vertical do cinza
   width: 300px;  // largura horizontal do cinza
   margin: 0 auto;  //margim horizontal do cinxa

}

main::-webkit-scrollbar{
   width: 0.5rem;
   background-color: #687b82;
}

main::-webkit-scrollbar-thumb{
   border-radius: 1.0rem;
   background-color: #3fa1e8;
}

main {
   //max-width: 
   margin-top: 10px;
   height: 900px; //altura vertical do scrollbar
   display: grid;
   gap: 1.0rem;
   border-radius: 5px;
   overflow-y: scroll;

}



h1 {
   font-size: 4.0rem;
   //text-transform: uppercase;
   margin-top: 5.0rem;   //pc 10.0rem
   margin-bottom: 3.0rem;
   text-align: end;

   line-height: 6.0rem;
   letter-spacing: 1px;
};


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

   //filter: brightness(0.5) saturate(1.5);

   margin: 12px 20px 0 20px; 
   
   opacity: 0.7;
}

.card img:hover {
   transform: scale(1.1);
   opacity: 1;

}

.card h2 {
   font-size: 17px;
   text-align: end;
   //position: absolute;
   //bottom: 30px;
   //left: 18px;
   padding-right: 2.0rem;
   padding-left: 2.0rem;

   font-weight: 400;

   display: flex;
   flex-direction: column;

   color: #ffff;

}

.card p {
   font-size: 12px;
   
   //background-color: #3fa1e8;
}

.card span button {
   font-size: 12px;
   border-radius: 7px;
   background-color: #ffff;
   color: black;
   padding: 0 1.0rem;
   height: 2.8rem;
   
   border: none;
   
}

img {
   width: 100%;
   height: auto;
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
      height: 290px;
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

   main div:nth-child(1) {
      grid-area: A;
      background-color: #9aa9af;
      height: 330px; //altura vertical do cinza
      width: 440px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
      
   }
   main div:nth-child(2) {
      grid-area: B;
      background-color: #9aa9af;   
      height: 330px; //altura vertical do cinza
      width: 440px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
      
   }
   main div:nth-child(3) {
      grid-area: C;
      background-color: #9aa9af;
      height: 330px; //altura vertical do cinza
      width: 450px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
   }
   main div:nth-child(4) {
      grid-area: D;
      background-color: #9aa9af;
      height: 330px; //altura vertical do cinza
      width: 450px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
   }
   main div:nth-child(5) {
      grid-area: E;
      background-color: #9aa9af;
      height: 330px; //altura vertical do cinza
      width: 450px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
   }
   main div:nth-child(6) {
      grid-area: F;
      background-color: #9aa9af;
      height: 330px; //altura vertical do cinza
      width: 450px;  // largura horizontal do cinza
      margin: 0 auto;  //margim horizontal do cinxa
   
   }

   .card img {
      height: 23.0rem;  // altura vertical da imagem 23.0rem  pc 
      width: 38.0rem;   // largura horizontal da imagem 38.rem  pc
   
   }

   main {
      height: 350px;
   }  



}

@media (min-width: 1440px) {
   .page {
      padding: 0 40px;
   }
   main {
      grid-template-areas: "A B C" "D E F";
   }

   main {
      height: 350px;
      width: 1380px;
   }  
}

`;