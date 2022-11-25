import styled from "styled-components";

import "@fontsource/montserrat";
import bubble1 from '../../assets/images/bubble1.png'
import bubble2 from '../../assets/images/bubble2.png'

import Hand from '../../assets/images/hands.png'

export const Wrapper = styled.div`
    overflow: hidden;
    font-family: "Montserrat";
    background-color: #FBF5FF;
    min-height: 4500px;

    .focus{
        animation: focus 2s;

   @keyframes focus{
            from{
                margin-left: 50%;
            }
            to{
                margin-left: 0%;
            }
        }
    }

    .focusparagraph{
        width: 100%;
        animation: focusparagraph 2s;
        height: 200px;
        padding-top: 30px;
        background: #F1D9FF;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);

@keyframes focusparagraph{
         from{
             margin-left: -50%;
         }
         to{
             margin-left: 0%;
         }
     }
    }
`;

export const Content = styled.div`
    padding: 50px;
    overflow: hidden;
   
`;
export const Welcome = styled.div`
    display: flex;
    width: 100%;
   
    padding: 60px;
    background: linear-gradient(100.97deg, #FFBFB6 4.61%, rgba(248,204,255,0) 100%);
    border-top-left-radius: 13pc;
    border-bottom-left-radius: 13pc;
    border-top-right-radius: 13pc;
    border-bottom-right-radius: 13pc;
    height: 67vh;
`;

export const WordWelcome = styled.div`
    width: 50%;

   h1{
    color: #250039;
    font-size: 55px;
    font-weight: bold;
   }

   h4{
    font-weight: 400;
    margin-top: 50px;
    width: 85%;
   }

   animation: word 2s;

   @keyframes word{
            from{
                margin-top: 50%;
            }
            to{
                margin-top: 0%;
            }
        }
`;

export const ImageContent = styled.div`
width: 50%;
animation: image 5s;
@keyframes image{
    0% {
    opacity: 0;
    //transform: scale(0.5, 0.5);
  }
  100% {
    opacity: 1;
   // transform: scale(1, 1);
  }
        }

`;

export const Word = styled.span`
font-family: "sans-serif";
font-size: larger;
font-weight: 900;
    ::before{
        content: "Accessible";
        color: green;
    animation: animate infinite 14s;
    
    
    }
    @keyframes animate {
  
  0% {
      content: "Accessible";
      color: green;
  }

  50% {
      content: "Cost effective";
      color: blue;
  }

  100% {
      content: "Comprehensive";
      color:violet;
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
    margin-top: 0%;
    font-family: "Montserrat";
`;

export const ImageBackground = styled.div`
width: 120%;
height: 70%;

margin-top: 25%;
margin-left: -30px;


`;

export const Counseling = styled.img`
    width: 400px;
    margin-left: 20%;
    margin-top: -50px;
`;

export const Bubble1 = styled.div`
    background-image: url(${bubble1});
    width: 120px;
    height: 63px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    margin-left: 18%;
    margin-top: -10%;
    font-size: 13px;
    padding-left: 19px;
    padding-top: 30px;
    animation: fade 5s infinite;

    @keyframes fade {
  0%,100% { opacity: 1 }
  50% { opacity: 0 }
}

`;

export const Bubble2 = styled.div`
 background-image: url(${bubble2});
 width: 120px;
    height: 65px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    margin-left: 28%;
    margin-top: -10%;
    font-size: 13px;
    padding-left: 19px;
    padding-top: 30px;

    animation: fade2 5s infinite;

    @keyframes fade2 {
  0%,100% { opacity: 0 }
  50% { opacity: 1 }
}
`;

export const NumberContent = styled.div`
    width: 190px;
    height: 30px;
    border-radius: 20px;
    background-color: white;
    margin-top: -13%;
    margin-left: -4%;
    display: flex;
    align-items: center;
    padding: 10px;
    z-index: 9999;
    position: absolute;

    .phone{
        animation: updown 1s ease infinite;
        @keyframes updown {
 

 50% {
   transform: translateY(8%);
   
 }

 
}
    }
`;

export const Video = styled.div`
background-size: cover;
width: 100%;
height: 500px;
background-image: url(${Hand});
margin-top: 100px;

animation: video 2s;
@keyframes video{
    0% {
   
    transform: scale(0.5, 0.5);
  }
  100% {
    
    transform: scale(1, 1);
  }
        }

`;

export const Services = styled.div`
h2{
    text-align: center;
    color: #1E012E;
    animation: word 2s;

   @keyframes word{
            from{
                margin-top: 5%;
            }
            to{
                margin-top: 0%;
            }
        }

}

p{
    color: rgba(0,0,0,0.7);
    text-align: center;
    

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
justify-content: flex-start;
flex-wrap: wrap;

`;
export const Service1 = styled.div`
    box-shadow: 0px 6px 4px rgba(6,6,6,0.25);
    border-radius: 20px;
    width: 280px;
    height: 250px;
    margin-top: 170px;
    background-size: cover;
    animation: service 5s;
    margin-left: 7%;
@keyframes service{
    0% {
    opacity: 0;
    //transform: scale(0.5, 0.5);
  }
  100% {
    opacity: 1;
   // transform: scale(1, 1);
  }
        }
`;

export const StoryCircle = styled.div`
    width: 550px;
    height: 550px;
    border-radius: 100%;
    position: absolute;
    margin-left: 50%;
    float: left;
`;

export const Story = styled.div`
display: flex;
align-items: center;
margin-top: 100px;
justify-content: space-between;

.storypicture{
    animation: story1 2s;

@keyframes story1{
         from{
             margin-left: -25%;
         }
         to{
             margin-left: 0%;
         }
     }
}

.storyword{
    animation: story2 2s;

@keyframes story2{
         from{
             margin-right: -25%;
         }
         to{
             margin-right: 2%;
         }
     }
}

`;



export const ButtonContent = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
animation: button 4s;

@keyframes button{
         from{
             margin-left: 85%;
         }
         to{
             margin-left: 0%;
         }
     }

`;

export const WhyTitle = styled.div`
    border: 1px solid #FFB800;
    width: 200px;
    height: 50px;
    border-radius: 20px;
    padding-top: 180px;
    margin-top: -200px;
    margin-bottom: 20px;
    
`;

export const Whybutton = styled.div`
    background-color: #F9EEFF;
    box-shadow: 4px 4px 4px #AD00FF;
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
    background-color: #FFF5DB;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 330px;
    height: 330px;
    text-align: center;
    color: #1E012E;

    animation: cofounder 2s;
@keyframes cofounder{
    0% {
   
    transform: scale(0.5, 0.5);
  }
  100% {
    
    transform: scale(1, 1);
  }
        }
`;

export const White = styled.div`
width: 210px;
height: 210px;
background-size: cover;
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