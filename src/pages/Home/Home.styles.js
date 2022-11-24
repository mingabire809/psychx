import styled from "styled-components";
import CounsellingSession from '../../assets/images/counselling_session.png'
import "@fontsource/montserrat";

export const Wrapper = styled.div`
    overflow: hidden;
    font-family: "Montserrat";
`;

export const Content = styled.div`
    padding: 50px;
`;
export const Welcome = styled.div`
    display: flex;
    width: 100%;
`;

export const WordWelcome = styled.div`
    width: 50%;

   h1{
    color: #250039;
    font-size: 45px;
   }

   h4{
    font-weight: 400;
    margin-top: 50px;
   }
`;

export const ImageContent = styled.div`
width: 50%;
`;

export const Word = styled.span`
    ::before{
        content: "Accessible";
    animation: animate infinite 10s;
    
    
    }
    @keyframes animate {
  
  0% {
      content: "Accessible";
  }

  50% {
      content: "Cost effective";
  }

  100% {
      content: "Comprehensive";
  }
    
}
`;

export const SignUp = styled.button`
    background-color: #FFA800;
    color: white;
    width: 130px;
    height: 45px;
    color: white;
    border-color: transparent;
    font-weight: 700;
    cursor: pointer;
    border-radius: 20px;
    margin-top: 20%;
    font-family: "Montserrat";
`;

export const ImageBackground = styled.div`
width: 100%;
height: 250px;
background-color: #F1D9FF;
border-bottom-left-radius: 50%;
border-top-left-radius: 50%;
margin-top: 40%;
margin-left: 50px;


`;

export const Counseling = styled.img`
    width: 300px;
    margin-left: 35%;
    margin-top: -70px;
`;

export const NumberContent = styled.div`
    width: 180px;
    height: 60px;
    border-radius: 20px;
    background-color: white;
    margin-top: -20%;
    margin-left: 5%;
    display: flex;
    align-items: center;
`;

export const Video = styled.div`
background-size: cover;
width: 100%;
height: 420px;
background-image: url(${CounsellingSession});
margin-top: 100px;

`;

export const Services = styled.div`
h2{
    text-align: center;
    color: #1E012E;
}

p{
    color: rgba(0,0,0,0.7);
}

h3{
    margin-top: 50px;
    text-decoration: underline 5px #FFB800;
    background: linear-gradient(360deg, #250039 28.01%, #FFB800 88.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
}
`;

export const ServiceContent = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`;
export const Service1 = styled.div`
    box-shadow: 0px 6px 4px rgba(6,6,6,0.25);
    border-radius: 20px;
    width: 280px;
    height: 250px;
    margin-top: 30px;
`;

export const Story = styled.div`
display: flex;
align-items: center;
margin-top: 100px;
justify-content: space-between;

`;

export const ButtonContent = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

export const Whybutton = styled.div`
    background-color: #F9EEFF;
    box-shadow: 4px 4px 4px rgba(105, 0, 155, 0.4);
    border-radius: 20px;
    width: 180px;
    height: 45px;
    cursor: pointer;
    text-align: center;
    padding-top: 30px;
`;

export const Advertisement = styled.div`
width: 99%;
margin-left: auto;
margin-right: auto;
height: 200px;
background-color: #D9D9D9;
border-radius: 20px;
padding-top: 150px;

h1{
    text-align: center;
    
}
`;

export const CofounderContent = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 150px;
`;

export const Cofounder = styled.div`
    background-color: #E6E6E6;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 330px;
    height: 330px;
    text-align: center;
    color: #1E012E;
`;

export const White = styled.div`
width: 210px;
height: 210px;
background-color: white;
border-radius: 100%;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
`;

export const Line = styled.hr`
background-color: #FFB800;
width: 100%;
height: 2px;
`;