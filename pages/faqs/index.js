import {CustomControls} from 'components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import {Section} from 'components/Section'
import {Footer} from 'components/Footer'
import { motion } from 'framer-motion'
import Head from 'next/head'
import {useEffect} from 'react'
import DeviceDetect from "lib/deviceDetect"
import {Navbar} from 'components/Navbar'
import {Faqs} from 'components/Partner/Faqs'

const FaqsQandA = () => {
    const {isMobile} = DeviceDetect()

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
            <title>Datwit | FAQs</title>
            </Head>
            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
            { 
            !isMobile 
            ?
                <FullPage controls={CustomControls}>
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
                <Slide>
                    <Section classes={'min-h-screen pt-20'}>
                        <Faqs classes={"px-5 mx-auto"} />
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

export default FaqsQandA
