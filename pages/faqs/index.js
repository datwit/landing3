
import datas from '../../components/Partner/Faqs/data.json'
import uuid from 'react-uuid'
import {SectionHeader,SectionSubheader} from '../../styles/global'
import {QuestionText, AccordionList, AccordionWrapper} from '../../components/Partner/Faqs/style'
import Navbar from '../../components/Navbar' 
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { FullPage } from 'react-full-page'
import CustomControls from '../../components/Slide/CustomControls'
import AccordionItem from '../../components/Partner/Faqs/AccordionItem'

const FaqsQandA = () => {       
     
    return (
        
        <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>  
            <FullPage controls={CustomControls} scrollMode='normal'>
                <section className="pt-20">  
                    <div className="container px-5 mx-auto">              
                        <SectionHeader>Frequently asked questions</SectionHeader>
                        <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
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
                        {/*********************/}
                    </div>   
                </section>
                <section className= "w-full h-screen bg-primary mx-auto px-10">
                    <Footer />
                </section>
                
            </FullPage>       
                        
        </motion.div>
        
    )
}

export default FaqsQandA
