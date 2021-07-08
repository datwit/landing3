import React from 'react'
import {OuterWrapper, Field, Price, LilDescrip, PBulletsWrapper} from './style';
import PricingBullets from './PricingBullets';
import datas from "./pricing.json";

const MainPricingCard = () => {
    return (  
        <>      
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
        </>          
    )
}

export default MainPricingCard
