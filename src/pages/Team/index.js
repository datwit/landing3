import React from 'react'
import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Tech from '../../components/Tech'
import Benefits from '../../components/Benefits'
import Footer from '../../components/Footer'

const Team = () => {
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <Tech /> 
          </Section>        
        </Slide>

        <Slide>
          <Section>
            <Benefits />
          </Section>        
        </Slide>

        <Slide>
          <section className= "w-full h-screen bg-primary mx-auto px-10">
            <Footer />
          </section>                  
        </Slide>
        </FullPage>

    )
}

export default Team
