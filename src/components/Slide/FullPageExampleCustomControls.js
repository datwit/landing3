import React from 'react'
import CustomControls from './CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../Section'
import Hero from '../Home/Hero'
import StudyCases from '../Home/StudyCases'
import Services from '../Home/Services'
import Pricing from '../Home/Pricing'
import Footer from '../Footer'


const  FullPageExampleCustomControls = () => {
    
    return (
      <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <Hero />
          </Section>        
        </Slide>

        <Slide>
        <Section>
            <Services />
          </Section>
        </Slide> 

        <Slide>
          <Section>
            <StudyCases />
          </Section>          
        </Slide>
        
        <Slide>
          <Section>
            <Pricing />
          </Section>          
        </Slide>

        <Slide>
          <section className= "w-full h-screen bg-primary mx-auto px-10">
            <Footer />
          </section>                  
        </Slide>
             
      </FullPage>
    );
  }

  export default  FullPageExampleCustomControls
  