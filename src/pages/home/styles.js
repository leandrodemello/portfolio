import styled from 'styled-components';

export const Container = styled.div`
  min-width: 500px;

.home {
   text-align: center;

   > img {
      width: 240px;
      height: 210px;
      margin-top: 50px;
   }
  
   > h1 {
      font-size: 25px;
      margin-top: 10px;
   }

   > p {
      font-size: 15px;
      margin-top: 10px;
      color: #9e9ea0;
   }

   > button {
      font-size: 13px;
      font-weight: 700;

      height: 30px;
      width: 110px;
      margin-top: 20px;
      border-radius: 5px;
      background-color: #04d361;
      
      
   }
   
   button:hover {
      background-color: #039645;
   }

}

@media (min-width: 768px) {

.home {

   > img {
      width: 340px;
      height: 310px;
      margin-top: 0px;
   }

   > h1 {
      font-size: 43px;
      
   }

   > p {
      font-size: 19px;
   }

   > button {
      font-size: 14px;

      height: 35px;
      width: 120px;
   }
}
}

`;
