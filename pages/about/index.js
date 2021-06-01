import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Datwit from '../../components/AboutUs/Datwit'
import Members from '../../components/AboutUs/Members'
import Collaborators from '../../components/AboutUs/Collaborators' 
import { motion } from 'framer-motion'
import Head from 'next/head';
import Navbar from '../../components/Navbar'
import {useEffect} from 'react'
import DeviceDetect from "../../lib/deviceDetect";


const About = () => {
  const {isMobile} = DeviceDetect()

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const style={
    height:'calc(100% - 80px)',    
  } 

   /*****hiding scroll bar*/
  useEffect(()=>{
    isMobile ? [] : document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  })
  
    return ( 
      <> 
        <Head>
        <title>Datwit | About us</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>    
        <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
        { !isMobile ?       
            <FullPage controls={CustomControls}> 
              <Slide {...style}>
                <Section classes={'w-full h-screen'}>
                  <Datwit classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"}/>
                </Section>        
              </Slide>

              <Slide>
                <Section classes={'w-full h-screen'}>
                  <Members classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"}/>
                </Section>        
              </Slide>

              <Slide>
                <Section classes={'w-full h-screen'}>
                  <Collaborators classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"}/>
                </Section>        
              </Slide>

              <Slide>
                <Section classes={"w-full h-screen bg-primary mx-auto px-10"}>
                  <Footer />
                </Section>                  
              </Slide>        
            </FullPage>
          :
          <>
            <Navbar scrollToSlide={ scrollToTop }/>            
              <Slide {...style}>
                <Section classes={'pb-16 pt-20'}>
                  <Datwit classes={"container px-5 mx-auto"}/>
                </Section>        
              </Slide>

              <Slide>
                <Section classes={'pb-16'}>
                  <Members classes={"container px-5 mx-auto"}/>
                </Section>        
              </Slide>

              <Slide>
                <Section classes={'pb-16'}>
                  <Collaborators classes={"container px-5 mx-auto"}/>
                </Section>        
              </Slide>

              <Slide>
                <Section classes={"w-full h-screen bg-primary mx-auto px-10"}>
                  <Footer />
                </Section>                  
              </Slide>        
          </>    
        }       
        </motion.div> 
      </>       
    )
}

export default About
