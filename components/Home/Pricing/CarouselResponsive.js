import React from 'react'
import uuid from 'react-uuid'
import {OuterWrapper, Field, Price, LilDescrip, PBulletsWrapper, CarouselContainer} from './style';
const Carousel = require('react-responsive-carousel').Carousel;
import PricingBullets from './PricingBullets';
import datas from "./pricing.json";

const CarouselResponsive = () => {
    return (
        <CarouselContainer onTouchMove={e => e.stopPropagation()}>                    
            <Carousel showArrows={true} showThumbs={false}>
            {
                datas.map(data => (  
                    <OuterWrapper key={uuid()}>
                        <div className={data.style}>
                            <Field>{data.field}</Field>
                            <Price>{data.price}</Price>
                            <LilDescrip>{data.description}</LilDescrip>
                            {
                                data.bullets.map(data => (
                                    <PBulletsWrapper key={uuid()}>
                                        <PricingBullets title={data.title}/> 
                                    </PBulletsWrapper>
                                ))
                            }                               
                        </div>
                    </OuterWrapper>  
                ))
            }                  
            </Carousel>                   
        </CarouselContainer>
 
    )
}

export default CarouselResponsive
