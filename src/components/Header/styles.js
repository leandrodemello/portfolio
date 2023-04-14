import styled from "styled-components";

export const Container = styled.header`
    grid-area: header; 

    height: 50px; 
    width: 100%; 

    border-bottom-width: 1px; 
    border-bottom-style: solid; 
    border-bottom-color: black; 

    display: flex; 
    justify-content: space-between; 

    padding: 10px;

`;

export const Profile = styled.div`

span {
   font-size: 20px;
   font-weight: bold;

   margin-left: 10px;
   color: black;
         
}


   
`;

export const Navega = styled.div`

li {
   font-size: 14px;
   font-weight: bold;
   margin-right: 5px;
      
      
   color: black;

   list-style: none;
   float: left;

   padding: 9px;


}

li:hover {
   cursor: pointer;
}

   
`;