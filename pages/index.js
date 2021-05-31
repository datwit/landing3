import CustomControls from '../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../components/Section'
import Hero from '../components/Home/Hero'
import StudyCases from '../components/Home/StudyCases'
import Services from '../components/Home/Services'
import Pricing from '../components/Home/Pricing'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Selection from '../components/Selection' 
import { motion } from 'framer-motion'
import Head from 'next/head';
import {useEffect} from 'react'
import DeviceDetect from "../lib/deviceDetect";

export default function Home() {
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
      <title>Datwit | Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>     
      <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
          { !isMobile ? 
            <>
              <FullPage controls={CustomControls}> 

                <Slide {...style}>      
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
            </>
              
              :
              <>
                <Navbar scrollToSlide={ scrollToTop }/>

                <Slide {...style}>      
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
              </>

        }
        </motion.div> 
    </>         
  )
}
