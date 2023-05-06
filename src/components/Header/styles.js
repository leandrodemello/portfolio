import styled from "styled-components";

export const Container = styled.header`
    min-width: 425px;

    grid-area: header;

    height: 120px; 
    width: 100%; 
    
    display: flex; 
    justify-content: space-between;
    align-items: center;
    
    padding: 15px;
    
    @media (min-width: 770px) {
      transition: 1s;
      height: 50px; 
       
   }

`;

export const Profile = styled.div`

img {
   width: 140px;
   height: 150px;
   transition: .15s;
         
}

`;

export const Navega = styled.div`

li {
   font-size: 19px;
   font-weight: bold;
   list-style: none;
   padding: 2px;
   transition: .15s;

 @media (min-width: 770px) {
   max-width: 1900px;
   float: left;
   margin-left: 25px;

 }

}

li:hover {

   color: #03FA6E;
   cursor: pointer;
   transition: .15s;

}





`;