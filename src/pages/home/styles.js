import styled from 'styled-components';

export const Container = styled.div`
  min-width: 425px;

.home {
text-align: center;

   > img {
      width: 340px;
      height: 310px;
   }
  
   > h1 {
      font-size: 30px;
      margin-top: 10px;
   }

   > p {
      font-size: 14px;
      margin-top: 10px;
   }

   > button {
      font-size: 14px;
      font-weight: 700;

      height: 30px;
      width: 105px;
      margin-top: 20px;
      border-radius: 3px;

      border: 1px;
      border-style: solid;
      border-color: #03FA6E;
      transition: .15s;
     
   }
   
   button:hover {
      transition: .15s;
      cursor: pointer;
      border: none;
      background: #03FA6E;
   }

}

@media (min-width: 768px) {

.home {
   > h1 {
      font-size: 43px;
      
   }
}
}

`;
