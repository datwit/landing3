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
  const style={
    height:'calc(100% - 80px)',    
  }  

  const before = (event) => {
    const navb = document.getElementById('navbar')
    if(event.from === 5){
      navb.classList.replace('bar-vanished','bg-white')
    }
  }
  const after = (event) => {
    const navb = document.getElementById('navbar')
    if(event.to === 5 ){
      navb.classList.replace('bg-white','bar-vanished')
    }
  }  
  
  return (
    <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
            <FullPage controls={CustomControls} beforeChange={before} afterChange={after}> 

              <Slide {...style}>
                <div className="flex items-center flex-wrap h-20 w-full fixed top-0 bg-fixed bg-white z-10" id='navbar'>              
                  <Navbar/> 
                </div>       
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
      
      </motion.div>       
  )
}
