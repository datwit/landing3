import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import CustomControls from '../../components/Slide/CustomControls'
import Footer from '../../components/Footer'
import Find from '../../components/Partner/Find'
import Faqs from '../../components/Partner/Faqs'
import PartPricing from '../../components/Partner/PartPricing' 
import { motion } from 'framer-motion'
import Head from 'next/head';
import {useEffect} from 'react'
import Navbar from '../../components/Navbar'
import DeviceDetect from "../../lib/deviceDetect";


const Partner = () => {
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
        <title>Datwit | Partner</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>  
        <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
        { !isMobile ? 
            <FullPage controls={CustomControls}>
            <Slide {...style}>
              <Section classes={'w-full h-screen'}>
                <Find  classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"}/>
              </Section>        
            </Slide>

            <Slide>
              <Section classes={'w-full h-screen'}>
                <PartPricing  classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"}/>
              </Section>        
            </Slide>

            <Slide>
              <Section classes={'w-full h-screen'}>
                <Faqs classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"} />
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
                  <Find classes={"container px-5 mx-auto"}/>
                </Section>        
              </Slide>

              <Slide>
                <Section classes={'pb-16'}>
                  <PartPricing classes={"container px-5 mx-auto"} />
                </Section>        
              </Slide>

              <Slide>
                <Section classes={'pb-16'}>
                  <Faqs classes={"container px-5 mx-auto"} />
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

export default Partner