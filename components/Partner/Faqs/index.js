import { SectionHeader, SectionSubheader} from '../../../styles/global'
import {QuestionWrapper, QuestionText} from './style';
import CTA from '../../Home/CTA'
import Link from "next/link"


const Faqs = ({classes}) => {  
    
    
    return (
        <div className={classes}>
            <SectionHeader>Frequently asked questions</SectionHeader> 
            <SectionSubheader>These are some of our more frequently asked questions</SectionSubheader>
            <QuestionWrapper>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-2/4 p-10">
                    <div className="shadow border border-gray-300 p-6 shadow hover:shadow-lg transition duration-200 ease-in">
                        <Link href="/faqs-partner"><QuestionText>For <br/> Partners</QuestionText></Link>
                    </div>                    
               </div>
               <div className="w-full sm:w-2/4 p-10">
                    <div className="shadow border border-gray-300 p-6 shadow hover:shadow-lg transition duration-200 ease-in">
                    <Link href="/faqs-team"><QuestionText>For <br/> Developers</QuestionText></Link>
                    </div>
                   
               </div> 

            </div>
                                            
            </QuestionWrapper>
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
