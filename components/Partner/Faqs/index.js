import { SectionHeader, SectionSubheader} from '../../../styles/global'
import {QuestionWrapper, QuestionText} from './style';
import CTA from '../../Home/CTA'
import Link from "next/link"
import {PartnerIconSVG} from './PartnerIconSVG'
import {DevIconSVG} from './DevIconSVG'


const Faqs = ({classes}) => {  
    
    
    return (
        <div className={classes}>
            <SectionHeader>Frequently asked questions</SectionHeader> 
            <SectionSubheader>These are some of our more frequently asked questions</SectionSubheader>
            
            <div className="flex flex-wrap">
                <div className="w-full sm:w-2/4 p-6 md:p-10">
                    <Link href="/fpartner">
                        <QuestionWrapper>
                            <PartnerIconSVG />
                            <QuestionText>For <br/> Partners</QuestionText>
                        </QuestionWrapper>
                    </Link>                    
               </div>
               <div className="w-full sm:w-2/4 p-6 md:p-10">
                    <Link href="/fteam">
                        <QuestionWrapper>
                            <DevIconSVG />
                            <QuestionText>For <br/> Developers</QuestionText>
                        </QuestionWrapper>
                    </Link>                   
               </div>          
            </div>
                                            
            
            {/* <SectionSubheader>If you want to know its answers and a bunch of other questions, feel free to click below...</SectionSubheader>
            
                <CTA buttonName={'Read more'} hhref='/faqs'>                
                    <svg className="h-6 w-6 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </CTA> */}                  
        </div>
            
    )
}

export default Faqs
