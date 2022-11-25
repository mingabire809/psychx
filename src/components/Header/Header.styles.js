import styled from 'styled-components'
import "@fontsource/montserrat";

export const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    box-shadow: 4px 6px 4px #DC9EFF;
    font-family: "Montserrat";
    margin-bottom: 10px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
`;

export const Logocontent = styled.div`
    color: #53296B;
`;

export const MenuContent = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
align-items: center;
`;

export const JoinButton = styled.button`
    background-color: #FFA800;
    width: 130px;
    height: 45px;
    color: white;
    border-color: transparent;
    font-weight: 700;
    cursor: pointer;
    border-radius: 20px;
    font-family: "Montserrat";
`;