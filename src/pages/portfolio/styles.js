import styled from "styled-components";

export const Container = styled.div`

.page {
   max-width: 700px;
   margin: 0 auto;

}

@media (min-width: 700px) {
   .page {
      max-width: 1450px;
      padding: 0 50px;
   }

   main {
      grid-template-areas: "A B C"
      "D E F";
   }
   
   main div:nth-child(1) {
      grid-area: A;
      background-color: #9aa9af;
   }
   main div:nth-child(2) {
      grid-area: B;
      background-color: #9aa9af;

      
   }
   main div:nth-child(3) {
      grid-area: C;
      background-color: #9aa9af;

   }
   main div:nth-child(4) {
      grid-area: D;
      background-color: #9aa9af;

   }
   main div:nth-child(5) {
      grid-area: E;
      background-color: #9aa9af;

   }
   main div:nth-child(6) {
      grid-area: F;
      background-color: #9aa9af;

   }
}

main::-webkit-scrollbar{
   width: 5px;
   background-color: #687b82;
}

main::-webkit-scrollbar-thumb{
   border-radius: 10px;
   background-color: #3fa1e8;
}

main {
   margin-top: 10px;
   height: 380px;
   display: grid;
   gap: 10px;
   border-radius: 5px;
   overflow-y: scroll;

}

h1 {
   font-size: 40px;
   //text-transform: uppercase;
   margin-top: 100px;
   margin-bottom: 30px;
   text-align: end;

   line-height: 60px;
   letter-spacing: 1px;
};


.card {
   position: relative;
   border-radius: 3px;
   height: 360px;
}

.card img {
   height: 230px;
   width: 400px;
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
   text-align: end;
   font-size: 29px;
   //position: absolute;
   //bottom: 30px;
   //left: 18px;
   padding-right: 20px;
   padding-left: 20px;

   font-weight: 400;

   display: flex;
   flex-direction: column;

   color: #ffff;

}

.card p {
   font-size: 17px;
   
   //background-color: #3fa1e8;
}

.card span button {
   font-size: 17px;
   border-radius: 7px;
   background-color: #ffff;
   color: black;
   padding: 0 10px;
   height: 38px;
   
   border: none;
   
}

img {
   width: 100%;
   height: auto;
}

`;