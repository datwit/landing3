
import CTA from '../CTA';
import {ContentWrapper, SectionHeader, SectionSubheader} from 'styles/global';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MainPricingCard from './MainPricingCard';
import CarouselResponsive from './CarouselResponsive';
import { FiSend } from 'react-icons/fi';


const Pricing = ({classes}) => {
    
    return (
        
        <div className={classes}>
            <SectionHeader>Choose your kind of solution</SectionHeader>
            <SectionSubheader>Our goal is to accomplish to the product you have in mind through intuitive designs and great tools to back them up.</SectionSubheader>

            <div className="hidden md:block">
                <ContentWrapper>
                    <MainPricingCard /> 
                </ContentWrapper>                                    
            </div>
             {/*********responsive************** */} 
            <div className="md:hidden">               
                <CarouselResponsive />                 
            </div>

            <CTA buttonName={'Contact us'} hhref='/contact'>
                <FiSend className="h-6 w-6 text-white ml-2"/>  
            </CTA>
        </div>
    )
}

export default Pricing
