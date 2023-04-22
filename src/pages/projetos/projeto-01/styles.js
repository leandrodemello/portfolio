import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

a { 
   color: currentColor;
}

.project {
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   margin-top: 50px;

   padding: 20px;
   
}

h1 {
   font-size: 40px;
}

p {
   font-size: 18px;
   margin-bottom: 10px;
}

.tech {
   display: flex;
   justify-content: flex-end;

   padding: 10px;
   width: 650px;
   
}

span {
   font-size: 20px;
   
}

.deploy {
   display: flex;
   justify-content: flex-end;
   font-size: 29px;
   padding: 10px;
   width: 650px;
   color: #79cded;
}

.icone-d {
   padding: 5px;

   p {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
}

.icone-d:hover{
   transition: 0.5s;
   color: #0f91c2;
}
     
`;