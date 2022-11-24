import React from "react";
import { Container, Content, Content2, Submit, Talk, Wrapper } from "./Footer.styles";
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import LinkedIn from '../../assets/images/linkedin.png'
import Youtube from '../../assets/images/youtube.png'

const Footer = ()=>{
    return(
        <Wrapper>
            <Content>
                <Container style={{marginLeft: 20}}>
                    <div style={{width: 100, height: 40, borderRadius: 20, backgroundColor: 'white', textAlign: 'center', paddingTop: 20, marginTop: 10, fontSize: 20, fontWeight: '800', color: '#53296B'}}>
                    P<span style={{fontSize: 13}}>sych</span>X
                    </div>
                    <h4>https://www.psychx.io</h4>
                    <h4 style={{marginTop: 70}}>Follow Us</h4>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <img src={Facebook} alt="social"/>
                        <img src={Instagram} alt="social"/>
                        <img src={Twitter} alt="social"/>
                        <img src={LinkedIn} alt="social"/>
                        <img src={Youtube} alt="social"/>
                    </div>
                </Container>

                <Container>
                   <h3>Contact Us</h3>
                   <h5>+254714392052</h5> 
                   <h5>+254720401194</h5>
                   <h5>+254726551488</h5>
                </Container>
                <Container>
                    <h3>Locate Us</h3>
                    <h5>Lorem Ipsum, 00010 Francistown</h5>
                    <h5>Floor 7th, Office No. 117</h5>
                    <h5>Nairobi, Kenya</h5>
                </Container>
                <Container style={{marginRight: 20}}>
                    <h3 style={{color: '#1E012E'}}>Talk to Us</h3>
                    <Talk placeholder="Type Message ..."/>
                    <Submit>Submit</Submit>
                </Container>
            </Content>
            <Content2>
                <h4>Privacy & Policy</h4>
                <h4>Powered by Vesen Computing</h4>
            </Content2>
        </Wrapper>
    )
}

export default Footer;