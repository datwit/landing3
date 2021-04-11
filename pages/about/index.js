import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Datwit from '../../components/AboutUs/Datwit'
import Members from '../../components/AboutUs/Members'
import Collaborators from '../../components/AboutUs/Collaborators'
import Navbar from '../../components/Navbar' 

const About = () => {
  const style={
    height:'calc(100% - 80px)',    
  } 
  
    return (
        <FullPage controls={CustomControls}>
        <Slide {...style}>
          <Navbar />
          <Section>
            <Datwit />
          </Section>        
        </Slide>

        <Slide>
          <Section>
            <Members />
          </Section>        
        </Slide>

        <Slide>
          <Section>
            <Collaborators />
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
