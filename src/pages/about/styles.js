import styled from 'styled-components';

export const Container = styled.div`
min-width: 425px;
margin: 0 auto;

.about {
   padding: 15px;
   margin: 10px 40px;

  > h1 {
   font-size: 22px;

  }

 > p {
   font-size: 19px;
   line-height: 30px;
   text-align: justify;
 }

}

.container {
	display: flex;                  
	justify-content: flex-end;
  gap: 3px;
}

.item {
  font-size: 29px;
  margin: 5px;
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
  color: #9e9ea0;

  margin-top: 20px;
  
  > p {
    font-size: 15px;
    padding: 5px;
  }

}

@media (min-width: 768px) {
  max-width: 1020px;

  .about {
   margin-top: 90px;
   margin-left: 40px;
   margin-right: 40px;
   
    > p {
      font-size: 22px;
    }
  }
  
  .techs {
   margin-top: 40px;
  }

}

@media (min-width: 1024px) {
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .about {
    width: 864px;
    margin-top: 100px;
      
  }

  .container {
    margin-top: 20px;
  }

}

@media (min-width: 1440px) {
  max-width: 1734px;

}

`;






