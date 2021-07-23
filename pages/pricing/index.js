import CustomControls from 'components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from 'components/Section'
import Footer from 'components/Footer'
import { motion } from 'framer-motion'
import Head from 'next/head';
import Navbar from 'components/Navbar'
import {useEffect} from 'react'
import DeviceDetect from "lib/deviceDetect";
import Pricing1 from 'components/Pricing1'
import Pricing2 from 'components/Pricing2'
import Pricing3 from 'components/Pricing3'


const PricingP = () => {
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
        <title>Datwit | Pricing</title>
        </Head>
        <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
        { !isMobile ?
            <FullPage controls={CustomControls}>
               	<Slide>
                  	<Section classes={'w-full h-screen'}>
                    	<Pricing1 classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 mt-8"} />
                  	</Section>
                </Slide>

                <Slide>
                    <Section classes={'w-full h-screen'}>
                      <Pricing2 classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 mt-8"} />
                    </Section>
                </Slide>

                <Slide>
                    <Section classes={'w-full h-screen'}>
                      <Pricing3 classes={"container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 mt-8"} />
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
            	<Slide>
		            <Section classes={'pb-16'}>
		               	<Pricing1 classes={"px-5 mx-auto"} />
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

export default PricingP