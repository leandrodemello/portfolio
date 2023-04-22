import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 120px; 
    width: 100%; 
    
    background-color:  ${props => props.theme.body};
    
    display: flex; 
    justify-content: space-between;
    align-items: center;
    
    padding: 15px;
    
    @media (min-width: 770px) {
       height: 50px; 
       
   }

`;

export const Profile = styled.div`

span {
   font-size: 20px;
   color: ${props => props.theme.fontColor};
   font-weight: bold;
         
}

span:hover {
   cursor: pointer;
   color: #58a1d6;
}

`;

export const Navega = styled.div`

li {
   font-size: 19px;
   font-weight: bold;
   color: ${props => props.theme.fontColor};
   list-style: none;
   padding: 2px;

 @media (min-width: 770px) {
   max-width: 1900px;
   float: left;
   margin-left: 25px;

 }

}

a:target {
   color: #0f91c2;
}

li:hover {

   cursor: pointer;
   color: #7ccae8;
}





`;