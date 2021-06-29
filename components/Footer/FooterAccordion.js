import React, { useState, useRef } from 'react'
import Link from 'next/link'
import uuid from 'react-uuid'
import {AccordionSection, Accordion, AccordionTitle,AccordionContent} from './style'

const FooterAccordion = ({ title, items }) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

    return (
        <>
          <AccordionSection>
              <Accordion className={setActive} onClick={toggleAccordion}>
                  <AccordionTitle>{title}</AccordionTitle>                
                  <svg className={`${setRotate} text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
              </Accordion>
              <AccordionContent ref={content} style={{ maxHeight: `${setHeight}` }}>                
                <ul className="my-2">
                  {
                      items.map(l =>(
                        <li className="list-none" key={uuid()}>
                          <Link href={l.url}>{l.title}</Link>
                        </li>                        
                      ))                    
                  }
                </ul>                      
              </AccordionContent>
          </AccordionSection>
         
        </> 
    )
}

export default FooterAccordion
