import React, {useRef} from "react";
import { Advertisement, White,ButtonContent, Cofounder, CofounderContent, Content, Counseling, ImageBackground, ImageContent, NumberContent, Service1, ServiceContent, Services, SignUp, Story, Video, Welcome, Whybutton, Word, WordWelcome, Wrapper, Line, Bubble1, Bubble2, WhyTitle } from "./Home.styles";
import Counsel from '../../assets/images/counsel1.png'
import Call from '../../assets/images/call.png'
import Play from '../../assets/images/play.png'
import Accordion from "../../components/Accordion";
import StoryPicture from '../../assets/images/story.png'
import { JoinButton } from "../../components/Header/Header.styles";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import useIsVisible from "../../hooks";
import Under from '../../assets/images/underimage.png'

import Image1 from '../../assets/images/service1.png'
import Image2 from '../../assets/images/service2.png'
import Image3 from '../../assets/images/service3.png'
import Image4 from '../../assets/images/service4.png'
import Image5 from '../../assets/images/service5.png'
import Image6 from '../../assets/images/service6.png'

import Image7 from '../../assets/images/service7.png'
import Image8 from '../../assets/images/service8.png'
import Image9 from '../../assets/images/service9.png'
import Image10 from '../../assets/images/service10.png'
import Image11 from '../../assets/images/service11.png'
import Image12 from '../../assets/images/service12.png'
import Cofounder1 from '../../assets/images/cofounder1.png'
import Cofounder2 from '../../assets/images/cofounder2.png'
import Cofounder3 from '../../assets/images/cofounder3.png'

import Moon from '../../assets/images/moon.png'
import Counsellingservice from '../../assets/images/counsellingservice.png'
import CorporateWellness from '../../assets/images/corporatewellness.png'




const Home = ()=>{
    const advertise = [
        <Advertisement>
                        <h1>Advertise here</h1>
                    </Advertisement>,
                    <Advertisement>
                    <h1>Advertise here</h1>
                </Advertisement>,
                <Advertisement>
                <h1>Advertise here</h1>
            </Advertisement>,
            <Advertisement>
            <h1>Advertise here</h1>
        </Advertisement>
    ]
    const videoRef = useRef();
    const video = useIsVisible(videoRef);
    const serviceRef = useRef()
    const service = useIsVisible(serviceRef)
    const storyRef = useRef()
    const story = useIsVisible(storyRef)
    const whyRef = useRef()
    const why = useIsVisible(whyRef)
    const focusRef = useRef()
    const focus = useIsVisible(focusRef)

    const cofounderRef = useRef()
    const cofounder = useIsVisible(cofounderRef)
    return(
        <Wrapper>
          
                <Welcome>
                    <WordWelcome>
                        <h1><Word></Word></h1>
                        <h1 style={{marginTop: -30}}> mental wellness services.</h1>
                        <h4>Making mental health a way of life by providing accessible,cost effective and comprehensivemental wellness services.</h4>
                        <SignUp>Sign Up Now</SignUp>
                    </WordWelcome>
                    <ImageContent>
                        <ImageBackground>
                            <Bubble1>
                            Lorem ipsum dolor sit amet
                            </Bubble1>

                            <Bubble2>
                            Lorem ipsum dolor sit amet
                            </Bubble2>
                            <Counseling src={Counsel}/>
                            <img src={Under} style={{marginLeft: '23%',marginTop: -15, width: 380}} alt="under"/>
                        </ImageBackground>
                        <NumberContent>
                            <div style={{height: 40, width: 40, backgroundColor: '#FFB800', borderRadius: 60}}>
                            <img src={Call} alt="call" style={{marginTop: 10, marginLeft: 10}} className="phone"/>
                            </div>
                            <div>
                                <h5 style={{color: '#FFB800'}}>24 hour service</h5>
                                <h5 style={{marginTop: -15}}>+254 726 551 488</h5>
                            </div>
                        </NumberContent>
                    </ImageContent>
                </Welcome>
                
            
            <div ref={videoRef} style={{marginTop: 150}}>
                {video ? <Video>
                    <img src={Play} alt="play" style={{marginLeft: '45%', marginTop: 120, cursor: 'pointer'}}/>
                    <h2 style={{backgroundColor: '#C86F3D', width: 180, height: 40, textAlign: 'center',color: 'white', borderTopLeftRadius: 30,borderTopRightRadius: 30, marginLeft: '43%'}}>Our Services</h2>
                        <p style={{textAlign: 'center',fontWeight: "800", width: 930, backgroundColor: '#C86F3D', borderRadius: 30,color: 'white', height: 60, marginLeft: '10%', marginTop: -23}}>Our solution is a client therapist matchmaking platform where a client gets an opportunity to choose a therapist who suits their preferences and needs. The simple interphase collectsso
</p>
                </Video>: <></>}
            </div>
            

                <Content>
                    <Services ref={serviceRef}>
                        {service? <>
                            

<img style={{marginLeft: '8%'}} src={Counsellingservice} alt="title"/>
<div style={{width: 260, height: 6,marginLeft: '8%', backgroundColor: '#FFB800', borderRadius: 10, marginBottom: -150}}></div>

<ServiceContent>
    <Service1 style={{backgroundImage: `url(${Image1})`}}>
    
<Accordion title="Therapy for Depression" bg='#D86DBA' txtcolor="white"/>
    </Service1>
    <Service1 style={{backgroundImage: `url(${Image2})`}}>
    
<Accordion title="Anxiety Management" bg='#D86DBA' txtcolor="white"/>
    </Service1>
    <Service1 style={{backgroundImage: `url(${Image3})`}}>
    
<Accordion title="Trauma & Stress Management" bg='#D86DBA' txtcolor="white"/>
    </Service1>
    <Service1 style={{backgroundImage: `url(${Image4})`}}>
    
<Accordion title="Relationship, Family & Marriage" bg='#D86DBA' txtcolor="white"/>
    </Service1>
    <Service1 style={{backgroundImage: `url(${Image5})`}}>
    
<Accordion title="Loss Grief Counselling" bg='#D86DBA' txtcolor="white"/>
    </Service1>
    <Service1 style={{backgroundImage: `url(${Image6})`}}>
    
<Accordion title="Alcohol, Drug & Addiction" bg='#D86DBA' txtcolor="white"/>
    </Service1>
    
</ServiceContent>

<img style={{marginTop: 170, marginLeft: '8%'}} src={CorporateWellness} alt="title"/>
<div style={{width: 350, height: 6, marginLeft: '8%', backgroundColor: '#A200FF', borderRadius: 10, marginBottom: -150}}></div>

<ServiceContent>
<Service1 style={{backgroundImage: `url(${Image7})`}}>
    
    <Accordion title="Mental Health Education & Self Care" bg='#E3B3FF' txtcolor="black"/>
        </Service1>  

        <Service1 style={{backgroundImage: `url(${Image8})`}}>
    
    <Accordion title="Psychological First Aid" bg='#E3B3FF' txtcolor="black"/>
        </Service1>

        <Service1 style={{backgroundImage: `url(${Image9})`}}>
    
    <Accordion title="Employee Mental Wellness" bg='#E3B3FF' txtcolor="black"/>
        </Service1>

        <Service1 style={{backgroundImage: `url(${Image10})`}}>
    
    <Accordion title="Workplace Wellness & Wellbeing" bg='#E3B3FF' txtcolor="black"/>
        </Service1>

        <Service1 style={{backgroundImage: `url(${Image11})`}}>
    
    <Accordion title="Entrepreneurial Mental Wellness" bg='#E3B3FF' txtcolor="black"/>
        </Service1>

        <Service1 style={{backgroundImage: `url(${Image12})`}}>
    
    <Accordion title="Personal Branding & Development" bg='#E3B3FF' txtcolor="black"/>
        </Service1>
</ServiceContent>
                        </>:<></>}
                       
                    </Services>
                   
                </Content>
                <Line/>
                <Story ref={storyRef}>
                    
                    {story ? <>
                        <img src={StoryPicture} alt="story" className="storypicture"/>
            <div style={{width: '48%', marginRight: '2%'}} className="storyword">
                <h2 style={{color: '#1E012E'}}>Our Story</h2>
                <p>The peak of Covid 19 was a time of reckoning for many people acrossthe globe. We all went through different encounters and this changed our lives eitherpositively or negatively. During this time, mental health conditions were on the surge and thenumbers continue to rise by the day. PsychX is a brainchild of individuals who had anencounter with mental health either directly or indirectly.
</p>
<h3 style={{color: '#1E012E'}}>Our Mission</h3>
<div style={{display: 'flex', alignItems: 'center'}}>
    <div style={{backgroundColor: '#FFB800', width: 30, height: 30, borderRadius: '100%', marginRight: 20}}></div>
    <p style={{width: '80%'}}>Making mental health a way of life by providing accessible,cost effective and comprehensivemental wellness services
</p>
</div>

<h3 style={{color: '#1E012E'}}>Our Vision</h3>
<div style={{display: 'flex', alignItems: 'center'}}>
    <div style={{backgroundColor: '#FFB800', width: 30, height: 30, borderRadius: '100%', marginRight: 20}}></div>
    <p style={{width: '80%'}}>To be the leading provider of mental health services globally.

</p>
</div>
        <JoinButton style={{marginTop: 30, height: 60}}>View More</JoinButton>

            </div>
                    </>:<></>}
            
                    </Story>
                    <Content>
                        <WhyTitle>
                        <h2 style={{color: '#1E012E'}}>Why Psychx</h2>
                        </WhyTitle>
                    
                    <div ref={whyRef}>
                        {why ? <>
                            <ButtonContent>
                        <Whybutton>Reliable and Consistent</Whybutton>
                        <Whybutton>Hope</Whybutton>
                        <Whybutton>Mindfulness</Whybutton>
                        <Whybutton>Privacy & confidentiality</Whybutton>
                        <Whybutton>Trust</Whybutton>
                    </ButtonContent>
                        </>:<></>}
                    </div>
                    
                    </Content>
                    <Slider autoplay={3000} previousButton={false} nextButton={false} >
  {advertise.map((slide) => <div>
    <div>{slide}</div>
  </div>)}
</Slider>

<div ref={focusRef}>
        {focus ? <>
        <div style={{display: 'flex', alignItems: 'center', marginLeft: '43%'}}>
            <img src={Moon} alt="moon" style={{width: 30, height: 30, marginRight: -25}}/>
        <h2 style={{color: '#1E012E', textAlign: 'center'}} className="focus">Our focus</h2>
        </div>
            
<div className="focusparagraph">
<p style={{textAlign: 'center'}} >Our solution is a client therapist matchmaking platform where a client gets an opportunity tochoose a therapist who suits their preferences and needs. The simple interphase collectssome essential information which we then use an algorithm to match the client with the mostsuitable therapist. Our approach to mental health relies on a preventative approach whilealso building communities to ensure psychosocial support and reduction of stigma. We alsoguarantee utmost privacy and confidentiality while accessing the services and this ensuresintegrity of our therapy sessions. Our therapists are both social and sociable, willing to listenand work round the clock to ensure our clients achieve ultimate wellness and wellbeing
</p>
</div>
        </>:<></>}
    </div>
<Content>
   



<h2 style={{color: '#1E012E', textAlign: 'center', marginTop: 100}}>Our Co-founders</h2>
<CofounderContent ref={cofounderRef}>
    {cofounder ? <>
        <Cofounder>
        <White style={{backgroundImage: `url(${Cofounder1})`}}>

        </White>
        <h3>DR Juma Theopilus</h3>
        <h5 style={{marginTop: -10}}>CEO, PHARMACIST</h5>
    </Cofounder>

    <Cofounder>
        <White style={{backgroundImage: `url(${Cofounder2})`}}>

        </White>
        <h3>Mary Njoki</h3>
        <h5 style={{marginTop: -10}}>Aeronautical Engineer and Mental health advocate.
</h5>
    </Cofounder>

    <Cofounder>
        <White style={{backgroundImage: `url(${Cofounder3})`}}>

        </White>
        <h3>Freda Mawia(Fify)
</h3>
        <h5 style={{marginTop: -10}}>CTO, Senior Software Engineer
</h5>
    </Cofounder>
    </>: <></>}
    
</CofounderContent>
</Content>
        </Wrapper>
    )
}

export default Home;