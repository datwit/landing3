import React from 'react'
import {OuterWrapper, Field, Price, LilDescrip, PBulletsWrapper, CarouselContainer, BulletWrapper} from './style';
import PricingBullets from './PricingBullets';
import datas from "./pricing.json";
import Carousel from 'react-elastic-carousel'
import MainPricingCard from './MainPricingCard';
import BulletsContent  from './BulletsContent'
import {ContentWrapper} from 'styles/global';

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
                        <>
                        <ContentWrapper>
                            <div className="p-4 w-full">
                                <MainPricingCard style={data.style} field={data.field} price={data.price} description={data.description}/>                    
                            </div>                            
                            <div className= "px-4 sm:p-4 w-full">
                                <h4 className="font-semibold text-left">What's included:</h4>
                                <BulletWrapper>
                                    {
                                        React.Children.toArray(
                                            data.bullets.map(d => (
                                                <li>
                                                    <BulletsContent title={d.title}/>
                                                </li>
                                            ))
                                        )
                                    }
                                </BulletWrapper>
                            </div>
                        </ContentWrapper> 
                        </>                   
                    ))
                )
            }
         
            </Carousel>
        </CarouselContainer>
    )
}

export default CarouselResponsive
