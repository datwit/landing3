import {CTA} from '../CTA'
import {MainHeaderCont} from './style'
import { FiSend } from 'react-icons/fi'



const Hero = ()=>(         
        <div className="relative top-2/4 transform -translate-y-2/4">
          <MainHeaderCont>
              <h1>Bring your idea,
                <br/>
                we will make it real!
              </h1>
              <h4>
                The sky is not the limit...it’s just the start   
              </h4>              
              <CTA buttonName={'Contact us'} hhref='/contact'>
                  <FiSend className="h-6 w-6 text-white ml-2"/>                
              </CTA>              
          </MainHeaderCont> 
        </div>          
)
export {Hero}
