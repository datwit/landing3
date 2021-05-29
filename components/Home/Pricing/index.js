
import CTA from '../CTA';
import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MainPricingCard from './MainPricingCard';
import CarouselResponsive from './CarouselResponsive';



const index = () => {
    
    return (
        
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 md:mt-8">
            <SectionHeader>Choose your product</SectionHeader>
            <SectionSubheader>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</SectionSubheader>

            <div className="hidden md:block">
                <ContentWrapper>
                    <MainPricingCard /> 
                </ContentWrapper>
                                    
            </div>
            <div className="md:hidden">
                {/*********responsive************** */} 
            <CarouselResponsive />                 
            </div>
            <CTA buttonName={'Contact us'} hhref='/contact'>
                <svg className="h-6 w-6 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
            </CTA>
        </div>      

    )
}

export default index
