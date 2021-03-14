import React from 'react'
import CustomControls from './CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../Section'
import Hero from '../Home/Hero'
import StudyCases from '../Home/StudyCases'
import Services from '../Home/Services'


const  FullPageExampleCustomControls = () => {
    
    return (
      <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <Hero />
          </Section>        
        </Slide>
          <Section>
            <Services />
          </Section>         
        <Slide>
          <Section>
            <StudyCases />
          </Section>          
        </Slide>
        <Slide>
        <Section  name = "Section 3"/> 
        </Slide>        
      </FullPage>
    );
  }

  export default  FullPageExampleCustomControls
  