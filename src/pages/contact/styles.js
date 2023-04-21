import styled from "styled-components";

export const Container = styled.div`
  a { 
   color: currentColor;
    }

h1 {
  display: flex;
  justify-content: center;

  font-size: 30px;
}

main {
  display: flex;
  flex-direction: column;
  //background-color: #9aa9af;
  
  margin: 20px auto;

  //height: 150px;
  width: 300px;
  //padding: 20px;
}

button {

  font-weight: 700;
  height: 30px;
  border-radius: 3px;
  border: 1px;

  margin-top: 5px;

  border: 1px;
  border-style: solid;
  border-color: #6ec0da;

  
}

button:hover {
  cursor: pointer;
  border: none;
  color: #FFFF;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(103,106,214,1) 64%, rgba(0,212,255,1) 100%);
}







`;