import React from 'react'
import {ContentWrapper, SectionHeader, SectionSubheader} from 'styles/global';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MainPricingCard from '../Pricing1/MainPricingCard';
import {BulletWrapper, OuterWrapper} from '../Pricing1/style';
import BulletsContent  from '../Pricing1/BulletsContent'
import datas from "../Pricing1/pricing.json";

const Pricing2 = ({classes}) => {

    return (
    	<div className={classes}>
            <div className="lg:px-14">
                <ContentWrapper>
                    <OuterWrapper>                     
                        <MainPricingCard style={datas[1].style} field={datas[1].field} price={datas[1].price} description={datas[1].description}/>                    
                    </OuterWrapper> 
                    <div className= "px-4 sm:p-4 md:w-2/4 w-full">
                        <h4 className="font-semibold text-left">What's included:</h4>
                        <BulletWrapper>
                            {
                                React.Children.toArray(
                                    datas[1].bullets.map(d => (
                                        <li>
                                            <BulletsContent title={d.title}/>
                                        </li>
                                    ))
                                )
                            }
                        </BulletWrapper>
                    </div>
                </ContentWrapper>
            </div>            
                      
        </div>
    )
}

export default Pricing2