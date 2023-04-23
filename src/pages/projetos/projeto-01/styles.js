import styled from 'styled-components';

export const Container = styled.div`
min-width: 425px;


a { 
   color: currentColor;
}

.project {
   transition: 1s;

   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 30px;

   padding: 20px;

   h1 {
   font-size: 23px;
   transition: 1s;


   }

   h2  {
   font-size: 15px;
   margin-top: 10px;
   margin-bottom: 10px;
   text-align: justify;
   transition: 1s;

   }

   span {
    font-size: 14px;
    padding: 10px;
    transition: 1s;

   }

   img {
   height: 250px; 
   width: 350px;
   transition: 1s;

   }
   
}

.deploy {
   display: flex;
   justify-content: center;
   font-size: 29px;
   padding: 10px;
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

@media (min-width: 768px) {
   
.project {
   transition: 1s;
   
   margin-top: 5px;
   padding: 5px;

   h1 {
   font-size: 40px;
   }

   h2 {
   font-size: 18px;
   
   }

   span {
      font-size: 18px;

   }

   img {
   height: 370px; 
   width: 650px;
   transition: 1s;

   }
}
}

@media (min-width: 1000px) {
   
   .project {
      transition: 1s;
      display: grid;
      justify-content: center;
      justify-items: end;
      margin-top: 90px;

   }

}


     
`;