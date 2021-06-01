import React from 'react'
import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'
import { motion } from 'framer-motion'
import Head from 'next/head';
import {useEffect} from 'react'
import DeviceDetect from "../../lib/deviceDetect";
import Navbar from '../../components/Navbar'

const Contact = () => {
  const {isMobile} = DeviceDetect()

  const style={
    height:'calc(100% - 80px)',    
  } 

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(()=>{
    isMobile ? [] : document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  })

  
    return (
      <>
        <Head>
        <title>Datwit | Contact us</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
        { !isMobile ? 
            <FullPage controls={CustomControls}>
              <Slide {...style}>
                <Section classes={'w-full h-screen'}>
                  <ContactForm classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"} />
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
                  <ContactForm classes={"container px-5 mx-auto"} />
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

export default Contact
