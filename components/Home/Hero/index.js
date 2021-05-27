import CTA from '../CTA'
import {MainHeaderCont} from './style';



const Hero = ()=>(         
        <div className="relative top-2/4 transform -translate-y-2/4">
          <MainHeaderCont>
              <h1>Bring your idea,
                <br/>
                we will make it real!
              </h1>
              <h4>
                ...the sky isn't the limit for us...just the start
                {/* <br/>
                cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. */}
              </h4>              
              <CTA buttonName={'Contact us'} hhref='/contact'>
                  <svg className="h-6 w-6 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
              </CTA>              
          </MainHeaderCont> 
        </div>          
)
export default Hero
