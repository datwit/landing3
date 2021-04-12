import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import CustomControls from '../../components/Slide/CustomControls'
import Footer from '../../components/Footer'
import Find from '../../components/Partner/Find'
import Faqs from '../../components/Partner/Faqs'
import PartPricing from '../../components/Partner/PartPricing'
import Navbar from '../../components/Navbar' 
import { motion } from 'framer-motion'

const Partner = () => {
    const style={
      height:'calc(100% - 80px)',    
    } 

    return (
      <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
          <FullPage controls={CustomControls}>
          <Slide {...style}>
            <Navbar />
            <Section>
              <Find />
            </Section>        
          </Slide>

          <Slide>
            <Section>
              <PartPricing />
            </Section>        
          </Slide>

          <Slide>
            <Section>
              <Faqs />
            </Section>        
          </Slide>

          <Slide>
            <section className= "w-full h-screen bg-primary mx-auto px-10">
              <Footer />
            </section>                  
          </Slide>
          </FullPage>
      </motion.div>  
    )
}

export default Partner