import React from 'react'
import uuid from 'react-uuid'
import {OuterWrapper, Field, Price, LilDescrip, PBulletsWrapper, CarouselContainer} from './style';
import PricingBullets from './PricingBullets';
import datas from "./pricing.json";
import Carousel from 'react-elastic-carousel'

const CarouselResponsive = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 }               
    ]   
    return (
        <CarouselContainer onTouchMove={e => e.stopPropagation()}>                    
            <Carousel breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
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
