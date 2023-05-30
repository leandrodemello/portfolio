import styled from "styled-components";

export const Container = styled.div`
  min-width: 425px;
  display: flex;
  flex-direction: column;
  align-items: center;

h1 {
  font-size: 50px;
  margin-top: 20px;
  margin-bottom: 10px;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #03FA6E;
  
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 5px;

  width: 300px;
  height: 320px;

  border-radius: 5px;
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 1.55);
  -webkit-backdrop-filter: blur(15px);
  
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;

}

.input {
  height: 40px;
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  margin-bottom: 10px;
  background-color: #bfe0ce;
  
}

.textarea {
  height: 150px;
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #bfe0ce;
}

.button {
  font-size: 13px;
  font-weight: 700;

  height: 30px;
  width: 110px;
  margin-top: 5px;
  background-color: #04d361;

  border: none;
  border-radius: 5px;

  cursor: pointer;
     
}
   
.button:hover {
  border: none;
  background-color: #039645;
}


.icones {
  display: flex; 
  font-size: 29px;
  gap: 3px;
  margin-top: 10px;
  color: #FFFF;


  
  .item:hover{
   transition: 0.5s;
   color: #03FA6E;
  }
  
}

@media (min-width: 768px) {
transition: 0.5s;

h1 {
  margin-top: 50px;
}

form {
  width: 460px;
  height: 350px;
}

.input {
  width: 400px;
}

.textarea {
  width: 400px;
}

.button {
  margin-top: 10px;

  width: 150px;
  font-size: 15px;

}

.icones {
  margin-top: 20px;
}
}

`;