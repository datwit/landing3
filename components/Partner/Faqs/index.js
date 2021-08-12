import { SectionHeader, SectionSubheader} from 'styles/global'
import {SVGCircle} from './style';
import {FaqCard} from './FaqCard'
import {FaRegHandshake, FaLaptopCode} from "react-icons/fa";


const Faqs = ({classes}) => {

    return (
        <div className={classes}>
            <SectionHeader>Frequently asked questions</SectionHeader>
            <SectionSubheader>These are some of our more frequently asked questions</SectionSubheader>
            <div className="flex flex-wrap">
               <FaqCard href="/fpartner">
                    <SVGCircle><FaRegHandshake /></SVGCircle>
                    <h1 className="text-lg">For <br/> Partners</h1>
               </FaqCard>
                <FaqCard href="/fteam">
                    <SVGCircle><FaLaptopCode /></SVGCircle>
                    <h1 className="text-lg">For <br/> Developers</h1>
               </FaqCard>
            </div>
        </div>
    )
}

export {Faqs}
