import styled from 'styled-components';

export const Container = styled.div`
   min-width: 425px;


a {

   color: currentColor;
}

.return {
   a {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 10px;

      position: fixed;
      left: 10px;
      bottom: 45px;

   }
}

.project {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 30px;
   padding: 20px;
   transition: 1s;

   h1 {
      font-size: 30px;
      transition: 1s;


   }

   p  {
      font-size: 18px;
      text-align: justify;
      margin-top: 10px;
      margin-bottom: 10px;
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
   font-size: 20px;
   padding: 10px;
   color: #79cded;
}

.icone-d {
   padding: 5px;
   
   p {
      font-size: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0px;

   }
}

.icone-d:hover{
   transition: 0.5s;
   color: #3b82f6;
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

   .deploy {
      font-size: 29px;

   }

   .icone-d {
      p {
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
      margin-top: 90px;

   }

}
     
`;