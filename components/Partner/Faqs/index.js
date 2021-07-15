import { SectionHeader, SectionSubheader} from 'styles/global'
import {QuestionWrapper, QuestionText, SVGCircle} from './style';
import CTA from '../../Home/CTA'
import Link from "next/link"
import {PartnerIconSVG} from './PartnerIconSVG'
import {DevIconSVG} from './DevIconSVG'
import FaqCard from './FaqCard'
import {FaRegHandshake, FaLaptopCode} from "react-icons/fa";


const Faqs = ({classes}) => {

    return (
        <div className={classes}>
            <SectionHeader>Frequently asked questions</SectionHeader>
            <SectionSubheader>These are some of our more frequently asked questions</SectionSubheader>

            <div className="flex flex-wrap">
               <FaqCard href="/fpartner">
                    {/*<PartnerIconSVG />*/}
                    <SVGCircle><FaRegHandshake /></SVGCircle>
                    <h1 className="text-lg">For <br/> Partners</h1>
               </FaqCard>
                <FaqCard href="/fteam">
                    {/*<DevIconSVG />*/}
                    <SVGCircle><FaLaptopCode /></SVGCircle>
                    <h1 className="text-lg">For <br/> Developers</h1>
               </FaqCard>
            </div>
        </div>
    )
}

export default Faqs
