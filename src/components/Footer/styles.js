import styled from "styled-components";

export const Container = styled.footer`
    min-width: 425px;
    
    display: grid;
    justify-content: end;
    justify-items: center;
    font-size: 25px;

    color: ${props => props.theme.fontColor};


    width: 100%;
    height: 80px;
    margin: auto;
    bottom: 0;
    padding: 10px;
    position: fixed;
    z-index: -1;

`;