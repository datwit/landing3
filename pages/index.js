import CustomControls from 'components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from 'components/Section'
import Hero from 'components/Home/Hero'
import StudyCases from 'components/Home/StudyCases'
import Services2 from 'components/Home/Services2'
import Services1 from 'components/Home/Services1'
import Services3 from 'components/Home/Services3'
import Pricing from 'components/Home/Pricing'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Selection from 'components/Selection'
import { motion } from 'framer-motion'
import Head from 'next/head';
import {useEffect} from 'react'
import DeviceDetect from "lib/deviceDetect";

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
      </Head>
      <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
          { !isMobile ?
            <>
              <FullPage controls={CustomControls}>

                <Slide {...style}>
                  <Section classes={'w-full h-screen'}>
                      <Hero />
                  </Section>
                </Slide>

                <Slide>
                <Section classes={'w-full h-screen'}>
                    <Services2 classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"} />
                  </Section>
                </Slide>

                <Slide>
                <Section classes={'w-full h-screen'}>
                    <Services1 classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"} />
                  </Section>
                </Slide>

                 <Slide>
                <Section classes={'w-full h-screen'}>
                    <Services3 classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"} />
                  </Section>
                </Slide>

                <Slide>
                  <Section classes={'w-full h-screen'}>
                    <StudyCases classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"}/>
                  </Section>
                </Slide>

               { /*<Slide>
                   <Section classes={'w-full h-screen'}>
                     <Pricing classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 mt-8"} />
                   </Section>
                 </Slide>*/}

                <Slide>
                  <Section classes={'w-full h-screen'}>
                    <Selection classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"}/>
                  </Section>
                </Slide>

                <Slide>
                  <Section classes={"w-full h-screen bg-primary mx-auto px-10"}>
                    <Footer />
                  </Section>
                </Slide>

              </FullPage>
            </>

          :
          <>
            <Navbar scrollToSlide={ scrollToTop }/>

            <Slide {...style}>
                <Section classes={'w-full h-screen'}>
                  <Hero />
                </Section>
            </Slide>

            <Slide>
              <Section classes={'pb-16'}>
                <Services2  classes={"px-5 mx-auto"}/>
              </Section>
            </Slide>

            <Slide>
              <Section classes={'pb-16'}>
                <Services1  classes={"px-5 mx-auto"}/>
              </Section>
            </Slide>

             <Slide>
              <Section classes={'pb-16'}>
                <Services3  classes={"px-5 mx-auto"}/>
              </Section>
            </Slide>

            <Slide>
              <Section classes={'pb-16'}>
                <StudyCases classes={"px-5 mx-auto"} />
              </Section>
            </Slide>

            {/* <Slide>
               <Section classes={'pb-16'}>
                 <Pricing classes={"px-5 mx-auto"} />
               </Section>
             </Slide>*/}

            <Slide>
              <Section classes={'pb-16'}>
                <Selection classes={"px-5 mx-auto"} />
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