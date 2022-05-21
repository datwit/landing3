import React from 'react'
import {ContentWrapper, SectionHeader} from 'styles/global'
import {MainPricingCard} from './MainPricingCard'
import {CardTabsResponsive} from './CardTabsResponsive'
import datas from "./pricing.json"
import {BulletWrapper, OuterWrapper, ButtonPrice} from './style'
import {BulletsContent}  from './BulletsContent'
import { FiSend } from 'react-icons/fi'
import Link from 'next/link'
import {PricingButton} from './PricingButton'


const Pricing1 = ({classes}) => {

    return (

        <div className={classes}>
            <SectionHeader>Choose the solution that fits you best</SectionHeader>
            <div className="hidden md:block lg:px-14">
                <ContentWrapper>
                    {
                        React.Children.toArray(
                            datas.map(data=>(
                                <OuterWrapper>                    
                                    <MainPricingCard style={data.style} field={data.field} price={data.price} cost={data.cost} description={data.description}>                                        
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
                    <PricingButton />                                 
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
