import styled from "styled-components";

export const Container = styled.footer`

    width: 100%;
    height: 50px;
    margin: auto;
    bottom: 0;
    color: ${props => props.theme.fontColor};

    text-align: end;

    position: fixed;

    button {
        border: none;
        color: ${props => props.theme.fontColor};
        background-color:  ${props => props.theme.body};

        margin-right: 10px;


    }


`;