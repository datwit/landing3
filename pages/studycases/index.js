import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import CustomControls from '../../components/Slide/CustomControls'
import Footer from '../../components/Footer'
import AllCases from '../../components/StudyCases'

const StudyCases = () => {
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <AllCases />
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

export default StudyCases
