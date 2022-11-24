import React from "react";
import { Content, JoinButton, Logocontent, MenuContent, Wrapper } from "./Header.styles";

const Header = ()=>{
    return(
        <Wrapper>
            <Content>
                <Logocontent>
                    <h2>P<span style={{fontSize: 13}}>sych</span>X</h2>
                </Logocontent>
                <MenuContent>
                    <h3>Home</h3>
                    <h3>Our Story</h3>
                    <h3>Our Services</h3>
                    <h3>Join PsychX</h3>
                    <JoinButton>Live Chat</JoinButton>
                </MenuContent>

            </Content>
        </Wrapper>
    )
}

export default Header;