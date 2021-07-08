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
        </div>
            
    )
}

export default Faqs
