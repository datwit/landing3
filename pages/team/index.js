import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Tech from '../../components/Team/Tech'
import Benefits from '../../components/Team/Benefits'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

const Team = () => {
    const style={
      height:'calc(100% - 80px)',    
    } 
    return (
      <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
          <FullPage controls={CustomControls}>
          <Slide {...style}>
            <Navbar />
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
      </motion.div>
    )
}

export default Team
