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
              <CTA buttonName={'Contact us'}/>
          </MainHeaderCont> 
        </div>          
)
export default Hero
