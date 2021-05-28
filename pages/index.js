import CustomControls from '../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../components/Section'
import Hero from '../components/Home/Hero'
import StudyCases from '../components/Home/StudyCases'
import Services from '../components/Home/Services'
import Pricing from '../components/Home/Pricing'
import Footer from '../components/Footer'
import Selection from '../components/Selection' 
import { motion } from 'framer-motion'
import Head from 'next/head';
import {useEffect} from 'react'

export default function Home() {
  const style={
    height:'calc(100% - 80px)',    
  } 
  
  /*****hiding scroll bar*/
  // useEffect(()=>{
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "visible";
  //   };
  // })

  return ( 
    <> 
      <Head>
      <title>Datwit | Home</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>     
      <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
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
        
        </motion.div> 
    </>         
  )
}
