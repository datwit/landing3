import React from 'react'
import datas from 'components/Partner/Faqs/data-dev.json'
import {SectionHeader} from 'styles/global'
import { AccordionList, AccordionWrapper} from 'components/Partner/Faqs/style'
import {Footer} from 'components/Footer'
import { motion } from 'framer-motion'
import { FullPage } from 'react-full-page'
import {CustomControls} from 'components/Slide/CustomControls'
import {AccordionItem} from 'components/Partner/Faqs/AccordionItem'
import Head from 'next/head'
import {Section} from 'components/Section'


const FaqsTeam = () => {
    return (
        <>
            <Head>
            <title>Datwit | FAQs for Developers</title>
            </Head>
            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
                <FullPage controls={CustomControls} scrollMode='normal'>

                    <Section classes={"min-h-screen pt-20"}>
                        <div className="px-5 mx-auto">
                            <SectionHeader className="mb-4">Frequently asked questions for developers</SectionHeader>
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
                    </Section>

                    <Section classes={ "w-full h-screen bg-primary mx-auto px-10"}>
                        <Footer />
                    </Section>

                </FullPage>
            </motion.div>
        </>
    )
}

export default FaqsTeam
