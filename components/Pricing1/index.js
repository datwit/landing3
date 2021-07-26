import React from 'react'
import {ContentWrapper, SectionHeader, SectionSubheader} from 'styles/global';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MainPricingCard from './MainPricingCard';
import CardTabsResponsive from './CardTabsResponsive';
import datas from "./pricing.json";
import {BulletWrapper, OuterWrapper} from './style';
import BulletsContent  from './BulletsContent'


const Pricing1 = ({classes}) => {

    return (

        <div className={classes}>
            <SectionHeader>Choose your kind of solution</SectionHeader>
            <SectionSubheader>Our goal is to accomplish to the product you have in mind through intuitive designs and great tools to back them up.</SectionSubheader>

            <div className="hidden md:block lg:px-14">
                <ContentWrapper>
                    <OuterWrapper>                    
                        <MainPricingCard style={datas[0].style} field={datas[0].field} price={datas[0].price} description={datas[0].description}/>                    
                    </OuterWrapper>    
                    <div className= "px-4 sm:p-4 md:w-2/4 w-full">
                        <h4 className="font-semibold text-left">What's included:</h4>
                        <BulletWrapper>
                            {
                                React.Children.toArray(
                                    datas[0].bullets.map(d => (
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
             {/*********responsive************** */}
            <div className="md:hidden">
                <CardTabsResponsive />
            </div>
           
        </div>
    )
}

export default Pricing1
