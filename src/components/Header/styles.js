import styled from "styled-components";

export const Container = styled.header`
min-width: 425px;
grid-area: header;

width: 100%; 

display: flex; 
justify-content: space-between;
padding: 10px;

//border-bottom: 1px solid;

@media (min-width: 768px) {
  transition: 1s;
  height: 70px; 
   
}

`;

export const Profile = styled.div`

img {
   width: 120px;
   height: 90px;
   margin-left: 10px;
         
}

@media (min-width: 768px) {
  max-width: 1500px;

img {
   width: 120px;
   height: 90px;
   margin-left: 20px;
   margin-top: -20px;
         
}
  

}
`;

export const Navega = styled.div`

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

}

li {
   font-size: 19px;
   font-weight: bold;
   list-style: none;
   padding: 2px;
   transition: .15s;

}

li:hover {

  color: #03FA6E;
  cursor: pointer;
  transition: .15s;

}

@media (min-width: 768px) {
  max-width: 1500px;
  
  ul {
    display: flex;
    flex-direction: row;

  }
  
  li {
    margin-right: 50px;

  }

}


`;