import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
 a { 
  color: currentColor;
}

h1 {
  font-size: 50px;
  font-family: monospace;
  margin-top: 50px;
  margin-bottom: 10px;
  
}

form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  
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
  background-color: #d4e3ee;
  transition: 0.5s;
  
  
}

.textarea {
  height: 150px;
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #d4e3ee;
  transition: 0.5s;
}

.button {
  
  font-weight: 700;
  height: 40px;
  width: 250px;
  margin-top: 10px;

  border-radius: 3px;
  border: 2px;
  border-style: solid;
  border-color: #d4e3ee;
  transition: 0.5s;
  
}

.button:hover {
  cursor: pointer;
  border: none;
  color: #FFFF;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(103,106,214,1) 64%, rgba(0,212,255,1) 100%);
}

.icones {
  display: flex; 
  font-size: 29px;
  gap: 3px;
  margin-top: 20px;
  color: #79cded;
  
  .item:hover{
   transition: 0.5s;
   color: #0f91c2;
  }
  
}

@media (min-width: 1024px) {
transition: 0.5s;

h1 {
  margin-top: 150px;
}
.input {
  width: 400px;
}

.textarea {
  width: 400px;
}

.button {
  width: 400px;
}

.icones {
  margin-top: 60px;
}
}


`;

export const Imput = styled.div`

`;
