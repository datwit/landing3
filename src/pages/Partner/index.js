import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import CustomControls from '../../components/Slide/CustomControls'
import Footer from '../../components/Footer'
import Find from '../../components/Find'

const Partner = () => {
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <Find />
          </Section>        
        </Slide>

        <Slide>
          <Section>
           
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

export default Partner
