import React from 'react'
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
                React.Children.toArray(
                    datas.map(data => (  
                    <OuterWrapper>
                        <div className={data.style}>
                            <Field>{data.field}</Field>
                            <Price>{data.price}</Price>
                            <LilDescrip>{data.description}</LilDescrip>
                            {
                                React.Children.toArray(
                                    data.bullets.map(data => (
                                    <PBulletsWrapper>
                                        <PricingBullets title={data.title}/> 
                                    </PBulletsWrapper>
                                    ))
                                )                               
                            }                               
                        </div>
                    </OuterWrapper>  
                    ))
                )                
            }                  
            </Carousel>                   
        </CarouselContainer> 
    )
}

export default CarouselResponsive
