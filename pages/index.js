import CustomControls from '../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../components/Section'
import Hero from '../components/Home/Hero'
import StudyCases from '../components/Home/StudyCases'
import Services from '../components/Home/Services'
import Pricing from '../components/Home/Pricing'
import Footer from '../components/Footer'
import Selection from '../components/Selection'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Home() {
  const style = {
    height: 'calc(100% - 80px)',
  }

  return (
    <motion.div
      initial=
      {{ 
        opacity: 0,
        /*slide up*/  /*slide down: y:'-50vh'*/       
        y: '50vh',
      }}
      animate=
      {{ 
        opacity: 1,        
        y:'0vh',
      }}>
      <FullPage controls={CustomControls}>
        <Slide {...style}>
          <Navbar />
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
          <section className="w-full h-screen bg-primary mx-auto px-10">
            <Footer />
          </section>
        </Slide>

      </FullPage>
    </motion.div>
  )
}
