import React from 'react'
import {ContentWrapper, SectionHeader} from 'styles/global'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {MainPricingCard} from './MainPricingCard'
import {CardTabsResponsive} from './CardTabsResponsive'
import datas from "./pricing.json"
import {BulletWrapper, OuterWrapper, ButtonPrice} from './style'
import {BulletsContent}  from './BulletsContent'
import { FiSend } from 'react-icons/fi'
import Link from 'next/link'


const Pricing1 = ({classes}) => {

    return (

        <div className={classes}>
            <SectionHeader>Choose your kind of solution</SectionHeader>
            <div className="hidden md:block lg:px-14">
                <ContentWrapper>
                    {
                        React.Children.toArray(
                            datas.map(data=>(
                                <OuterWrapper>                    
                                    <MainPricingCard style={data.style} field={data.field} price={data.price} description={data.description}>                                        
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
                                    </MainPricingCard>                    
                                </OuterWrapper> 
                            ))
                        )
                       
                    }
                    <div className="flex justify-content w-full">
                        <Link href="/contact">
                            <ButtonPrice 
                            > Contact us
                                <FiSend className={`h-6 w-6 ml-2`}/>
                            </ButtonPrice>
                        </Link>
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

export {Pricing1}
