import styled from 'styled-components';

export const Container = styled.div`
   min-width: 425px;

.project {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 10px;

   > h1 {
      font-size: 28px;
      margin-top: 40px;

   }

   > p  {
      font-size: 19px;
      text-align: justify;
      margin-top: 10px;
      margin-bottom: 10px;
      width: 350px;

   }

   > span {
      font-size: 10px;
      padding: 10px;

   }

   > img {
      height: 250px; 
      width: 350px;

      border-radius: 3px;

   }
   
}

.deploy {
   display: flex;
   justify-content: center;
   font-size: 22px;
   padding: 5px;

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
      margin-bottom: 20px;
      margin-left: 40px;

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
      font-size: 20px;
      width: 650px;

   }

   > h2 {
      font-size: 18px;
   
   }

   > span {
      font-size: 17px;

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
      margin-top: 30px;

      > p {
         width: 950px;
         margin-bottom: 20px;
   
      }

   }

}
`;