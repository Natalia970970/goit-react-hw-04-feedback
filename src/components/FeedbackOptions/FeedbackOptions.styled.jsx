import styled from "styled-components";

export const ButtonList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
    list-style: none;
    padding-bottom: 30px;
`;

export const Button = styled.button`
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 700;
    width: 100px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff;
    border: groove;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #2791b5;
        color: #fff;
    }
`;