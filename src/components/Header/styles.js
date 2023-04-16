import styled from "styled-components";

export const Container = styled.header`
    grid-area: header; 

    height: 40px; 
    width: 100%; 
    
    background-color:  #1873b0;

    border-bottom-width: 1px; 
    border-bottom-style: solid; 
    border-bottom-color: #87aae6; 

    display: flex; 
    justify-content: space-between;

    margin: auto;

`;

export const Profile = styled.div`

span {
   text-align: justify;
   font-size: 20px;
   font-weight: bold;

   margin-left: 10px;
   color: #FFFF;
         
}


   
`;

export const Navega = styled.div`

li {

   text-align: justify;
   font-size: 17px;
   margin-right: 30px;
      
      
   color: #FFFF;

   list-style: none;
   float: left;

   padding: 10px;

}

li:hover {
   cursor: pointer;
}

   
`;