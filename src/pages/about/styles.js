import styled from "styled-components";

export const Container = styled.div`
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

.container {
   display: flex;
   align-items: center;
   justify-content: end;
   margin-right: 280px;
   height: 10vh;
   gap: 5px;
}

.icons {
   width: 26px;
   height: 26px;
}

.icons:hover {
   color: royalblue;
   cursor: pointer;
   transition: 0.2s;
   
}
   
`;