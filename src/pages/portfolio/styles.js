import styled from "styled-components";

export const Container = styled.div`

.page {
   max-width: 700px;
   margin: 0 auto;

}

@media (min-width: 600px) {
   .page {
      max-width: 1170px;
      padding: 0 50px;
   }

   main {
      grid-template-areas: "A B C"
      "D E F";
   }

   main div:nth-child(1) {
      grid-area: A;
   }
   main div:nth-child(2) {
      grid-area: B;
   }
   main div:nth-child(3) {
      grid-area: C;
   }
   main div:nth-child(4) {
      grid-area: D;
   }
   main div:nth-child(5) {
      grid-area: E;
   }
   main div:nth-child(6) {
      grid-area: F;
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
   height: 500px;
   display: grid;
   gap: 20px;
   border-radius: 5px;
   overflow-y: scroll;

}

h1 {
   font-size: 40px;
   text-transform: uppercase;
   text-align: end;

   line-height: 100px;
   letter-spacing: 1px;
};

.card {
   position: relative;
}

.card img {
   height: 416px;
   object-fit: cover;

   border-radius: 9px;

   transition: transform 200ms;

   filter: brightness(0.5) saturate(1.5);
}

.card img:hover {
   //transform: scale(1.1);
   opacity: 0.8;
}

.card h2 {
   position: absolute;
   bottom: 30px;
   left: 18px;

   font-weight: 500;

   display: flex;
   flex-direction: column;

   color: #ffff;

   > a {
      width: 100%;
   
      text-align: end;

      //background-color: black;
   }

   > a button {
      font-size: 100%;
      border-radius: 10px;
      padding: 0 10px;
      height: 38px;

      border: none;
   }

}

.card span button {
   font-size: 14px;
   border-radius: 10px;
   background-color: #ffff;
   font-weight: 800;
   color: black;
   padding: 0 10px;
   height: 38px;

   border: none;

}

//.card a {
   //font-size: 36px;
   //   margin: 10px;
    //  color: #0f91c2;
    //  color: currentColor;
   



   //.item:hover{
   //transition: 0.5s;
   //color: #7ccae8;

//}

img {
   width: 100%;
   height: auto;
}

`;