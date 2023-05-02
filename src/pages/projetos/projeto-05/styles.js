import styled from 'styled-components';

export const Container = styled.div`
   min-width: 425px;

.project {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 10px;
   transition: 1s;

   > h1 {
      font-size: 28px;
      transition: 1s;

   }

   > p  {
      font-size: 16px;
      text-align: justify;
      margin-top: 10px;
      margin-bottom: 10px;
      transition: 1s;
      width: 350px;

   }

   > span {
      font-size: 14px;
      padding: 10px;
      transition: 1s;

   }

   > img {
      height: 250px; 
      width: 350px;
      transition: 1s;

   }
   
}

.deploy {
   display: flex;
   justify-content: center;
   font-size: 25px;
   padding: 10px;

}

.icone-d {
   padding: 5px;
   
   > p {
      font-size: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;

   }
}

.icone-d:hover{
   transition: 0.5s;
   color: #03FA6E;
}

.return {
   
   p {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 800;
      gap: 3px;
      padding-left: 20px;

   }
   
}

.return:hover {
   color: #03FA6E;

}

@media (min-width: 768px) {
   
.project {
   transition: 1s;
   margin-top: 5px;

   > h1 {
      font-size: 40px;
   }

   > p {
      width: 650px;

   }

   > h2 {
      font-size: 18px;
   
   }

   > span {
      font-size: 18px;

   }

   > img {
      height: 370px; 
      width: 650px;
      transition: 1s;

   }

   .deploy {
      font-size: 29px;

   }

   .icone-d {
      > p {
        font-size: 12px;

      }
   }

}
}

@media (min-width: 1000px) {
   
   .project {
      transition: 1s;
      display: grid;
      justify-content: center;
      justify-items: end;
      margin-top: 20px;

   }

}
`;