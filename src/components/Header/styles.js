import styled from "styled-components";

export const Container = styled.header`
min-width: 425px;
grid-area: header;

width: 100%;
display: flex; 
justify-content: space-between;
padding: px;

border-radius: 40px;
backdrop-filter: blur(15px);
background: rgba(255, 255, 255, 0.08);
box-shadow: 0 0 10px 1px rgba(0, 0, 0, 1.55);
-webkit-backdrop-filter: blur(15px);

@media (min-width: 768px) {
  transition: 1s;
  height: 50px;
  margin-top: 5px;
}

`;

export const Profile = styled.div`

img {
   width: 120px;
   height: 90px;
   margin-left: 15px;
   margin-top: 10px;
         
}

@media (min-width: 768px) {
  max-width: 1500px;

img {
   width: 120px;
   height: 90px;
   margin-left: 30px;
   margin-top: -21px;
         
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