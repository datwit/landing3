import React from 'react'
import CustomControls from './CustomControls'
import { FullPage, Slide } from 'react-full-page';
import Section from './Section'
import Hero from './Hero'


const  FullPageExampleCustomControls = () => {
    
    return (
      <FullPage controls={CustomControls}>
        <Slide>
        <Section>
          <Hero />
        </Section>        
        </Slide>
        <Slide>
        <Section  name = "Section 2"/> 
        </Slide>
        <Slide>
        <Section  name = "Section 3"/> 
        </Slide>        
      </FullPage>
    );
  }

  export default  FullPageExampleCustomControls
  