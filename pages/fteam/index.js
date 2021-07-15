import datas from '../../components/Partner/Faqs/data-dev.json'
import uuid from 'react-uuid'
import {SectionHeader,SectionSubheader} from '../../styles/global'
import {QuestionText, AccordionList, AccordionWrapper} from '../../components/Partner/Faqs/style'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { FullPage } from 'react-full-page'
import CustomControls from '../../components/Slide/CustomControls'
import AccordionItem from '../../components/Partner/Faqs/AccordionItem'
import Head from 'next/head';


const FaqsTeam = () => {
    return (
        <>
            <Head>
            <title>Datwit | FAQs for Developers</title>
            </Head>
            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
                <FullPage controls={CustomControls} scrollMode='normal'>

                    <section className="pt-20">
                        <div className="px-5 mx-auto">
                            <SectionHeader className="mb-4">Frequently asked questions for developers</SectionHeader>
                            {/*accordion component*/}
                            <AccordionWrapper>
                                <AccordionList>
                                {datas.map((data, key) => {
                                    return (
                                    <li {...{ className: 'accordion-list__item', key }}>
                                        <AccordionItem {...data} />
                                    </li>
                                    )
                                })}
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

export default FaqsTeam
