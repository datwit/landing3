import CustomControls from '../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../components/Section'
import Hero from '../components/Home/Hero'
import StudyCases from '../components/Home/StudyCases'
import Services from '../components/Home/Services'
import Pricing from '../components/Home/Pricing'
import Footer from '../components/Footer'
import Selection from '../components/Selection'

export default function Home() {
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
          <Section>
            <Selection />
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
