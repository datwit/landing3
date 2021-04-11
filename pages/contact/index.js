import React from 'react'
import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'
import Navbar from '../../components/Navbar' 

const Contact = () => {
  const style={
    height:'calc(100% - 80px)',    
  } 
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Navbar />
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
