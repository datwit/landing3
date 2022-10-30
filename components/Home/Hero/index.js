import {CTA} from '../CTA'
import {MainHeaderCont} from './style'
import { FiSend } from 'react-icons/fi'



const Hero = ()=>(         
        <div className="relative top-2/4 transform -translate-y-2/4">
          <MainHeaderCont>
              <h1>Machine Learning,
                <br/>
                solutions from A to Z!
              </h1>
              <p className='text-base md:text-lg leading-6 font-medium text-black text-opacity-70 text-center'>
                Bring your idea we will make it real!
              </p>              
              <CTA buttonName={'Contact us'} hhref='/contact'>
                  <FiSend className="h-6 w-6 text-white ml-2"/>                
              </CTA>              
          </MainHeaderCont> 
        </div>          
)
export {Hero}
