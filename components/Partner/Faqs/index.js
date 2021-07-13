import { SectionHeader, SectionSubheader} from 'styles/global'
import {QuestionWrapper, QuestionText} from './style';
import CTA from '../../Home/CTA'
import Link from "next/link"
import {PartnerIconSVG} from './PartnerIconSVG'
import {DevIconSVG} from './DevIconSVG'
import FaqCard from './FaqCard'


const Faqs = ({classes}) => {

    return (
        <div className={classes}>
            <SectionHeader>Frequently asked questions</SectionHeader>
            <SectionSubheader>These are some of our more frequently asked questions</SectionSubheader>

            <div className="flex flex-wrap">
               <FaqCard href="/fpartner">
                    <PartnerIconSVG />
                    For <br/> Partners
               </FaqCard>
                <FaqCard href="/fteam">
                    <DevIconSVG />
                    For <br/> Developers
               </FaqCard>
            </div>
        </div>
    )
}

export default Faqs
