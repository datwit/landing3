
import datas from '../../components/Partner/Faqs/data.json'
import uuid from 'react-uuid'
import {SectionHeader,SectionSubheader} from '../../styles/global'
import {QuestionText} from '../../components/Partner/Faqs/style'
import Navbar from '../../components/Navbar' 
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

const FaqsQandA = () => {       
     
    return (
        
        <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>            
            <Navbar />           
                <section className="pt-20">  
                    <div className="container px-5 mx-auto">              
                        <SectionHeader>Frequently asked questions</SectionHeader>
                        <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
                        {
                            datas.map(data => (
                                <div key={uuid()} id={data.id}>
                                    <h4>{data.question}</h4>
                                    <div>
                                        <p className="text-base mt-3">{data.answer}</p>
                                    </div>
                                </div>
                            ))
                        }  
                    </div>   
                </section>
                <section className= "w-full h-screen bg-primary mx-auto px-10">
                    <Footer />
                </section>            
        </motion.div>
        
    )
}

export default FaqsQandA
