import styled from "styled-components";

export const Content = styled.div`
width: 100%;
height: 50px;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
margin-top: 199.9px;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
h4{
    margin-left: 10px;
    
}
`;

export const AccordionContent = styled.div`
    width: 96%;
    height: 150px;
    border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
padding: 5px;
transition: 3s;
border: 1px solid black;
border-top: transparent;
background-color: white;
z-index: 99999;
`; 