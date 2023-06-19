import styled from "styled-components";

export const Container = styled.div`

img {
   width: 120px;
   height: 90px;
   margin-left: 30px;
   margin-top: -26px;
   position: fixed;
   z-index: 1;
         
}

header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;

  width: 100%;
  margin-top: 5px;
  height: 40px;
  border-radius: 40px;
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 1.55);
  -webkit-backdrop-filter: blur(15px);

  > nav a {
    margin-left: 90px;
    text-decoration: none;
    font-size: 19px;
    font-weight: bold;

  }

  > nav a:hover {
    color: #03FA6E;
    cursor: pointer;
    transition: .15s;
  }

}

.nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: #ffff;
    visibility: hidden;
    opacity: 0;
    font-size: 22px;
  }

@media only screen and (max-width: 800px) {
  header .nav-btn {
    visibility: visible;
    opacity: 1;
    margin-right: 10px;
    margin-top: 3px;

  }

  header nav {
    top: 0px;
    left: 0px;
    height: 200px;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: #292929;
    gap: 10px;
    transform: translateY(-100vh);
    z-index: 5;

  }

  header .responsive_nav {
    transform: none;
  }

  header .nav-close-btn {
    position: absolute;
    top: 0px;
    right: 0px;

  }
}

`;