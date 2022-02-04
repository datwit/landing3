import React, {useState, useMemo} from 'react'
import {ContentWrapper, SectionHeader} from 'styles/global'
import {MainPricingCard} from './MainPricingCard'
import {CardTabsResponsive} from './CardTabsResponsive'
import data from "./pricing.json"
import {BulletWrapper, OuterWrapper, ButtonPrice} from './style'
import {BulletsContent}  from './BulletsContent'
import { FiSend } from 'react-icons/fi'
import Link from 'next/link'
import {PricingButton} from './PricingButton'
import {Pricing} from "../Pricing"


const Pricing1 = ({classes}) => {       
        const [checked, setChecked] = useState({});
        const totalSum = useMemo(
            () =>
              Object.entries(checked).reduce(
                (accumulator, [id, value]) =>
                  value
                    ? accumulator +
                      data[0].bullets.find(
                        (subscriber) => subscriber.id + "" === id
                      ).amount
                    : accumulator,
                0
              ),
            [checked]
        );

    return (

        <div className={classes}>
            <SectionHeader>Choose your kind of solution</SectionHeader>
            <div className="hidden md:block lg:px-14">
                {/* <div>
                    {items.map((c) => {
                        return (
                        <div>
                            <input type="checkbox" onChange={(e) => handleChange(c, e.target.checked)} />
                            {`subscriber ${c.subscriberId}, amount ${c.amount}`}
                        </div>
                        );
                    })}
                    <p>Total {checked.reduce((sum, { amount }) => sum + amount, 0)}</p>
                </div> */}
                <Pricing/>
                <ContentWrapper>                           
                    <OuterWrapper>                    
                        <MainPricingCard style={data[0].style} field={data[0].field} price={data[0].price} description={data[0].description}>                                        
                        {/* <BulletWrapper>
                            {
                                React.Children.toArray(
                                    data.bullets.map(d => (
                                        <li>
                                            <BulletsContent title={d.title}/>
                                        </li>
                                    ))
                                )
                            }
                        </BulletWrapper>     */}                                       
                        </MainPricingCard>                    
                    </OuterWrapper>
                    <div className="p-4 md:w-2/3">                    
                        {
                            React.Children.toArray(
                                data[0].bullets.map(({ id, amount, title }) => (                              
                                    <div>
                                        <label>
                                            <input
                                            type="checkbox"
                                            defaultChecked={!!checked[id]}
                                            onChange={() => {
                                                setChecked({
                                                ...checked,
                                                [id]: !checked[id]
                                                });
                                            }}
                                            />
                                            {`${id}, amount: ${amount}, title: ${title}`}
                                        </label>
                                    </div>                               
                                )))
                        }
                        <h2>Sum of the amount for checked subscribers: {totalSum}</h2>
                   
                        {/* {items.map((c) => {
                            return (
                            <div>
                                <input type="checkbox" onChange={(e) => handleChange(c, e.target.checked)} />
                                {`subscriber ${c.subscriberId}, amount ${c.amount}`}
                            </div>
                            );
                        })}
                        <p>Total {checked.reduce((sum, { amount }) => sum + amount, 0)}</p> */}
                    </div>                             
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
