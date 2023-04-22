import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a { 
  color: currentColor;
}

h1 {
  font-size: 30px;
  margin-top: 20px;
}

form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
  
  margin: 20px auto;
  
  width: 280px;
  
}

.container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  
  background-color: #d4e3ee;
  
  width: 300px;
  //height: 370px;
  border-radius: 5px;
  
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}

.input {
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  
}

.textarea {
  height: 150px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
}

.button {

  font-weight: 700;
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: 1px;

  margin-top: 10px;

  border: 1px;
  border-style: solid;
  border-color: #6ec0da;

  
}

.button:hover {
  cursor: pointer;
  border: none;
  color: #FFFF;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(103,106,214,1) 64%, rgba(0,212,255,1) 100%);
}

@media (min-width: 1024px) {
.container {
  width: 350px;
}
.button {
  width: 350px;
}
}


`;