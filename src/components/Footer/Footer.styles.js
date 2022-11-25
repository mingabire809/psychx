import styled from "styled-components";
import "@fontsource/montserrat";

export const Wrapper = styled.div`
    width: 100%;
    height: 310px;
    background-color: #520079;
    border-top: 3px solid #520079;
    overflow: hidden;
    font-family: "Montserrat";
    color: white;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
    
`;

export const Container = styled.div`
width: 25%;
`;

export const Talk = styled.textarea`
    border-radius: 10px;
    background-color: white;
    width: 100%;
    height: 130px;
    font-size: 17px;
`;

export const Submit = styled.button`
border-radius: 10px;
background-color: #FFB800;
width: 130px;
height: 40px;
color: white;
border-color: transparent;
font-size: 15px;
font-weight: 700;
margin-left: 56%;
margin-top: 10px;
cursor: pointer;
font-family: "Montserrat";
`;

export const Content2 = styled.div`
width: 63%;
display: flex;
justify-content: space-between;
margin-left: auto;
`;