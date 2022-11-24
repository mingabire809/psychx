import React, {useState} from "react";
import { AccordionContent, Content } from "./Accordion.styles";
import Arrow from '../../assets/images/arrow.png'

const Accordion = ({title, content, bg, txtcolor})=>{
    const [isActive, setIsActive] = useState(false);
return(
    <>
    <Content  onClick={() => setIsActive(!isActive)} style={{backgroundColor: `${bg}`}}>
        <h4 style={{color: `${txtcolor}`}}>{title}</h4>
        <img src={Arrow} style={{width: 20, marginRight: 10}} alt="arrow"/>
    </Content>
    {isActive ? <AccordionContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.</AccordionContent>:null}
    </>
)
}

export default Accordion;