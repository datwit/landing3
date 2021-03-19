import React from 'react'
import CustomControls from '../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../components/Section'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <ContactForm />
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

export default Contact
