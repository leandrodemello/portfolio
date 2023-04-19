import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 90px; 
    width: 100%; 

    background-color:  ${props => props.theme.body};

    display: flex; 
    justify-content: space-between;
    align-items: center;

    padding: 15px;


`;

export const Profile = styled.div`

span {
   font-size: 20px;
   color: ${props => props.theme.fontColor};
         
}
`;

export const Navega = styled.div`

li {

   font-size: 17px;
   color: ${props => props.theme.fontColor};

   list-style: none;

   padding: 2px;

   @media (min-width: 770px) {
   max-width: 1900px;
   
   float: left;

   margin-left: 25px;
   

}
}

li:hover {
   cursor: pointer;
}


`;