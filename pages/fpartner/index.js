
import React from 'react'
import datas from 'components/Partner/Faqs/data-partner.json'
import {SectionHeader,SectionSubheader} from 'styles/global'
import {QuestionText, AccordionList, AccordionWrapper} from 'components/Partner/Faqs/style'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { motion } from 'framer-motion'
import { FullPage } from 'react-full-page'
import CustomControls from 'components/Slide/CustomControls'
import AccordionItem from 'components/Partner/Faqs/AccordionItem'
import Head from 'next/head';

const FaqsPartner = () => {

    return (
        <>
            <Head>
            <title>Datwit | FAQs for Partners</title>
            </Head>
            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
                <FullPage controls={CustomControls} scrollMode='normal'>

                    <section className="pt-20">
                        <div className="px-5 mx-auto">
                            <SectionHeader className="mb-4">Frequently asked questions for  partners</SectionHeader>
                            {/*accordion component*/}
                            <AccordionWrapper>
                                <AccordionList>
                                {
                                    React.Children.toArray(
                                         datas.map(data => (
                                            <li {...{ className: 'accordion-list__item'}}>
                                                <AccordionItem {...data} />
                                            </li>
                                        ))
                                    )
                                }
                                </AccordionList>
                            </AccordionWrapper>
                        </div>
                    </section>

                    <section className= "w-full h-screen bg-primary mx-auto px-10">
                        <Footer />
                    </section>

                </FullPage>
            </motion.div>
        </>
    )
}

export default FaqsPartner
