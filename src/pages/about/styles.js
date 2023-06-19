import styled from 'styled-components';

export const Container = styled.div`
min-width: 425px;
margin: 0 auto;

.about {
  display: flex;
  flex-direction: column;
}

.init {
  padding: 5px;
  margin: 10px 40px;

 > h1 {
   font-size: 22px;
   margin-top: 20px;

 }

 > h2 {
   font-size: 19px;
   line-height: 35px;
   text-align: justify;
   font-weight: lighter;
   margin-top: 5px;
   
  }
  
}

.container {
	display: flex;                  
	justify-content: flex-end;
  margin-right: 40px;
  gap: 3px;
}

.item {
  font-size: 29px;
  margin-right: 5px;
  color: #FFFF;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #03FA6E;
}

.item:hover{
  transition: 0.5s;
  color: #03FA6E;
}

.techs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  
  > p {
    font-size: 15px;
    padding: 5px;
  }

}

@media (min-width: 768px) {

  .about {
   margin-top: 90px;
   margin-left: 40px;
   margin-right: 40px;

  }
  
  .techs {
   margin-top: 40px;
  }

}

@media (min-width: 1224px) {

  .about {
    padding: 0 200px;
      
  }

}

`;