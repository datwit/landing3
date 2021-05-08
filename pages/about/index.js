import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Datwit from '../../components/AboutUs/Datwit'
import Members from '../../components/AboutUs/Members'
import Collaborators from '../../components/AboutUs/Collaborators' 
import { motion } from 'framer-motion'
import Head from 'next/head';


const About = () => {
  const style={
    height:'calc(100% - 80px)',    
  }  
  
    return ( 
      <> 
        <Head>
        <title>Datwit | About us</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>    
        <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>      
            <FullPage controls={CustomControls}> 
              <Slide {...style}>
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
        </motion.div> 
      </>       
    )
}

export default About
