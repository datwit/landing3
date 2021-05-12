
import datas from "./pricing.json";
import CTA from '../CTA';
import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global';
import {OuterWrapper, Field, Price, LilDescrip, PBulletsWrapper, PBullets, CarouselContainer} from './style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = require('react-responsive-carousel').Carousel;

const index = () => {
    
    return (
        
            <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 mt-8">
                <SectionHeader>Choose your product</SectionHeader>
                <SectionSubheader>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</SectionSubheader>

                <div className="hidden md:block">
                    <ContentWrapper>

                       {
                        datas.map((data, key) => (                     
                        
                        <OuterWrapper key={key}>
                            <div className={data.style}>
                                <Field>{data.field}</Field>
                                <Price>{data.price}</Price>
                                <LilDescrip>{data.description}</LilDescrip>
                                {
                                    data.bullets.map((data,key)=>(
                                        <PBulletsWrapper key={key}>
                                            <PBullets>
                                            <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                            </PBullets>{data.title}
                                        </PBulletsWrapper>
                                    ))
                                }                               
                            </div>
                        </OuterWrapper>  
                        ))
                       }                         
                        
                    </ContentWrapper>
                </div>
                <div className="md:hidden">
                 {/*********responsive************** */} 
                 <CarouselContainer>
                 <Carousel showArrows={true} showThumbs={false}>
                 {
                        datas.map((data, key) => (                     
                        
                        <OuterWrapper key={key}>
                            <div className={data.style}>
                                <Field>{data.field}</Field>
                                <Price>{data.price}</Price>
                                <LilDescrip>{data.description}</LilDescrip>
                                {
                                    data.bullets.map((data,key)=>(
                                        <PBulletsWrapper key={key}>
                                            <PBullets>
                                            <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                            </PBullets>{data.title}
                                        </PBulletsWrapper>
                                    ))
                                }                               
                            </div>
                        </OuterWrapper>  
                        ))
                }                  
                </Carousel>

                 </CarouselContainer>
                 
                </div>
                <CTA buttonName={'Contact us'} hhref='/contact'>
                    <svg className="h-6 w-6 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                </CTA>
            </div>
        
        

    )
}

export default index
