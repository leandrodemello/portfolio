import styled from "styled-components";

export const Container = styled.header`
    min-width: 425px;

    grid-area: header;

    height: 120px; 
    width: 100%; 
    
    background-color:  ${props => props.theme.body};
    
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

span {
   font-size: 20px;
   color: ${props => props.theme.fontColor};
   font-weight: bold;
   transition: .15s;

         
}

span:hover {
   cursor: pointer;
   color: #3b82f6;
}

`;

export const Navega = styled.div`

li {
   font-size: 19px;
   font-weight: bold;
   color: ${props => props.theme.fontColor};
   list-style: none;
   padding: 2px;
   transition: .15s;


 @media (min-width: 770px) {
   max-width: 1900px;
   float: left;
   margin-left: 25px;

 }

}

a:target {
   color: #3b82f6;
   transition: .15s;
}

li:hover {

   color: #3b82f6;
   cursor: pointer;
   transition: .15s;

}





`;