import React from 'react'
import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Datwit from '../../components/AboutUs/Datwit'

const About = () => {
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <Datwit />
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

export default About
