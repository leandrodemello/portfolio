import styled from "styled-components";

export const Container = styled.div`

`;

export const Texto = styled.div`
h1 {
   font-size: 27px;
   font-weight: 700;
   line-height: 60px;
   text-align: right;

   padding: 20px;

   margin-top: 100px;
   margin-right: 250px;
   color: black;

}

p {
   font-size: 25px;
   font-weight: 400;
   line-height: 29px;
   text-align: justify;

   margin-right: 250px;
   margin-left: 250px;

   color: black;

}
`;

export const Icones = styled.div`

.container {
	display: flex;                  
	justify-content: flex-end;
   margin-right: 240px;
}

.item {
      font-size: 36px;
      margin: 10px;
      color: #0f91c2;
   }

a { 
   color: currentColor;
}

.item:hover{
   transition: 0.5s;
   color: #7ccae8;
}
`;