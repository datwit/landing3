import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Tech from '../../components/Team/Tech'
import Benefits from '../../components/Team/Benefits'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Team = () => {
    const style={
      height:'calc(100% - 80px)',    
    } 
    return (
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

    )
}

export default Team
