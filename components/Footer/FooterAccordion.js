import React, { useState, useRef } from 'react'
import Link from 'next/link'

const FooterAccordion = () => {

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
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <h2 className="accordion__title">SPECIALIZED CONTENT</h2>                
                <svg className={`${setRotate} text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
              <Link href="/partner">Partner area</Link>
              <Link href="/team">Team member area</Link>
              <Link href="/faqs">FAQs</Link>            
            </div>
        </div>
    )
}

export default FooterAccordion
