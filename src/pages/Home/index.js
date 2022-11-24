import React from "react";
import { Advertisement, White,ButtonContent, Cofounder, CofounderContent, Content, Counseling, ImageBackground, ImageContent, NumberContent, Service1, ServiceContent, Services, SignUp, Story, Video, Welcome, Whybutton, Word, WordWelcome, Wrapper, Line } from "./Home.styles";
import Counsel from '../../assets/images/counsel1.png'
import Call from '../../assets/images/call.png'
import Play from '../../assets/images/play.png'
import Accordion from "../../components/Accordion";
import StoryPicture from '../../assets/images/story.png'
import { JoinButton } from "../../components/Header/Header.styles";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';




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
    return(
        <Wrapper>
            <Content>
                <Welcome>
                    <WordWelcome>
                        <h1><Word></Word> mental wellness services.</h1>
                        <h4>Making mental health a way of life by providing accessible,cost effective and comprehensivemental wellness services.</h4>
                        <SignUp>Sign Up Now</SignUp>
                    </WordWelcome>
                    <ImageContent>
                        <ImageBackground>
                            <Counseling src={Counsel}/>
                        </ImageBackground>
                        <NumberContent>
                            <div style={{height: 50, width: 50, backgroundColor: '#FFB800', borderRadius: 60}}>
                            <img src={Call} alt="call" style={{marginTop: 15, marginLeft: 15}}/>
                            </div>
                            <div>
                                <h5 style={{color: '#FFB800'}}>24 hour service</h5>
                                <h5>+254 726 551 488</h5>
                            </div>
                        </NumberContent>
                    </ImageContent>
                </Welcome>
                
            </Content>
            <Video>
                    <img src={Play} alt="play" style={{marginLeft: '45%', marginTop: 120, cursor: 'pointer'}}/>
                </Video>

                <Content>
                    <Services>
                        <h2>Our Services</h2>
                        <p>Our solution is a client therapist matchmaking platform where a client gets an opportunity to choose a therapist who suits their preferences and needs. The simple interphase collectsso
</p>

<h3>Counselling Services</h3>

<ServiceContent>
    <Service1>
    
<Accordion title="Therapy for Depression" bg='#C86F3D' txtcolor="white"/>
    </Service1>
    <Service1>
    
<Accordion title="Anxiety Management" bg='#C86F3D' txtcolor="white"/>
    </Service1>
    <Service1>
    
<Accordion title="Trauma & Stress Management" bg='#C86F3D' txtcolor="white"/>
    </Service1>
    <Service1>
    
<Accordion title="Relationship, Family & Marriage" bg='#C86F3D' txtcolor="white"/>
    </Service1>
    <Service1>
    
<Accordion title="Loss Grief Counselling" bg='#C86F3D' txtcolor="white"/>
    </Service1>
    <Service1>
    
<Accordion title="Alcohol, Drug & Addiction" bg='#C86F3D' txtcolor="white"/>
    </Service1>
    
</ServiceContent>

<h3 style={{textDecoration: 'underline 5px #A200FF', marginTop: 170}}>Corporate Wellness Program</h3>

<ServiceContent>
<Service1>
    
    <Accordion title="Mental Health Education & Self Care" bg='#E3B3FF' txtcolor="black"/>
        </Service1>  

        <Service1>
    
    <Accordion title="Psychological First Aid" bg='#E3B3FF' txtcolor="black"/>
        </Service1>

        <Service1>
    
    <Accordion title="Employee Mental Wellness" bg='#E3B3FF' txtcolor="black"/>
        </Service1>

        <Service1>
    
    <Accordion title="Workplace Wellness & Wellbeing" bg='#E3B3FF' txtcolor="black"/>
        </Service1>

        <Service1>
    
    <Accordion title="Entrepreneurial Mental Wellness" bg='#E3B3FF' txtcolor="black"/>
        </Service1>

        <Service1>
    
    <Accordion title="Personal Branding & Development" bg='#E3B3FF' txtcolor="black"/>
        </Service1>
</ServiceContent>
                    </Services>
                   
                </Content>
                <Line/>
                <Story>
            <img src={StoryPicture} alt="story"/>
            <div style={{width: '48%', marginRight: '2%'}}>
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
                    </Story>
                    <Content>
                    <h2 style={{color: '#1E012E'}}>Why Psychx</h2>
                    <ButtonContent>
                        <Whybutton>Reliable and Consistent</Whybutton>
                        <Whybutton>Hope</Whybutton>
                        <Whybutton>Mindfulness</Whybutton>
                        <Whybutton>Privacy & confidentiality</Whybutton>
                        <Whybutton>Trust</Whybutton>
                    </ButtonContent>
                    </Content>
                    <Slider autoplay={3000} previousButton={false} nextButton={false} >
  {advertise.map((slide) => <div>
    <div>{slide}</div>
  </div>)}
</Slider>
<Content>
<h2 style={{color: '#1E012E', textAlign: 'center'}}>Our focus</h2>
<p style={{textAlign: 'center'}}>Our solution is a client therapist matchmaking platform where a client gets an opportunity tochoose a therapist who suits their preferences and needs. The simple interphase collectssome essential information which we then use an algorithm to match the client with the mostsuitable therapist. Our approach to mental health relies on a preventative approach whilealso building communities to ensure psychosocial support and reduction of stigma. We alsoguarantee utmost privacy and confidentiality while accessing the services and this ensuresintegrity of our therapy sessions. Our therapists are both social and sociable, willing to listenand work round the clock to ensure our clients achieve ultimate wellness and wellbeing
</p>

<h2 style={{color: '#1E012E', textAlign: 'center', marginTop: 70}}>Our Co-founders</h2>
<CofounderContent>
    <Cofounder>
        <White>

        </White>
        <h3>DR Juma Theopilus</h3>
        <h5 style={{marginTop: -10}}>CEO, PHARMACIST</h5>
    </Cofounder>

    <Cofounder>
        <White>

        </White>
        <h3>Mary Njoki</h3>
        <h5 style={{marginTop: -10}}>Aeronautical Engineer and Mental health advocate.
</h5>
    </Cofounder>

    <Cofounder>
        <White>

        </White>
        <h3>Freda Mawia(Fify)
</h3>
        <h5 style={{marginTop: -10}}>CTO, Senior Software Engineer
</h5>
    </Cofounder>
</CofounderContent>
</Content>
        </Wrapper>
    )
}

export default Home;