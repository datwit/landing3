import React from 'react'
import uuid from 'react-uuid'
import {OuterWrapper, Field, Price, LilDescrip, PBulletsWrapper} from './style';
import PricingBullets from './PricingBullets';
import datas from "./pricing.json";

const MainPricingCard = () => {
    return (  
        <>      
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
        </>          
    )
}

export default MainPricingCard
