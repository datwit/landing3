import React,{ useState, useMemo } from 'react'
import { GrSystem,GrServerCluster, GrCode } from "react-icons/gr"
import {PricingButton} from '../Pricing1/PricingButton'
import { CardPriceCont, TabText, TabWrapper, ToggleWrapper, BundleChooser, Field, Price, LilDescrip, FullPricingCard, BulletWrapper} from '../Pricing1/style'
import data from "../Pricing1/pricing.json"
import {BulletsContent}  from '../Pricing1/BulletsContent'
import {ContentWrapper} from 'styles/global'

const Pricing = ({classes}) => {
    
    const [openTab, setOpenTab] = useState(1);
    const [checked, setChecked] = useState({});
    
    const Total =(b) =>{
        const totalSum = useMemo(
            () =>
                Object.entries(checked).reduce(
                (accumulator, [id, value]) =>
                    value
                    ? accumulator +
                        data[b].features.find(
                        (subscriber) => subscriber.id + "" === id
                        ).amount
                    : accumulator,
                0
                ),
            [checked]
        );
        return totalSum
    }
    
    return (
        <div className={classes}>
            <div>
                <ToggleWrapper>
                    <BundleChooser  color={openTab === data[0].num ? "#e69c24" : ""} className={openTab === data[0].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(data[0].num);
                        ClearChecks();
                        }}>
                        <TabWrapper>                                
                            <GrServerCluster className="h-10 w-10 md:h-6 md:w-6"/>
                            <TabText color={openTab === data[0].num ? "white" : "#4b4b4d"}>{data[0].field}</TabText>
                        </TabWrapper>                      
                    </BundleChooser>
                    <BundleChooser  color={openTab === data[1].num ? "#00baff" : ""} className={openTab === data[1].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(data[1].num);
                        ClearChecks();
                        }}>
                        <TabWrapper>    
                            <GrSystem className="h-10 w-10 md:h-6 md:w-6"/>  
                            <TabText color={openTab === data[1].num ? "white" : "#4b4b4d"}>{data[1].field}</TabText>
                        </TabWrapper>                     
                    </BundleChooser>
                        <BundleChooser  color={openTab === data[2].num ? "#1e4158" : ""} className={openTab === data[2].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(data[2].num);
                        ClearChecks();
                        }}>
                        <TabWrapper>
                            <GrCode className="h-10 w-10 md:h-6 md:w-6"/> 
                            <TabText color={openTab === data[2].num ? "white" : "#4b4b4d"}>{data[2].field}</TabText>
                        </TabWrapper>                       
                    </BundleChooser>
                </ToggleWrapper>
            </div>
            {
                React.Children.toArray(
                    data.map((data,index) => (
                        <ContentWrapper className={openTab === data.num ? "block" : "hidden"}>
                            <CardPriceCont className={openTab === data.num ? "block slide-left" : "hidden"}>
                                <FullPricingCard className={`border-${data.style}`}>
                                    <div className={`bg-${data.style}`}><Field>{data.field}</Field></div>
                                    <div className="p-3">  
                                        <LilDescrip>{data.description}</LilDescrip>                                        
                                        <h4 className="text-sm font-semibold pb-2">What's included</h4>
                                        {
                                            React.Children.toArray(
                                                data.bullets.map(d => (                                                    
                                                    <BulletsContent title={d.title}/>                                                                                                                                                       
                                                )) 
                                            )
                                        }                 
                                    </div>                                   
                                    <PricingButton style={data.style}/>                                                    
                                </FullPricingCard> 
                            </CardPriceCont>
                            <div className= "px-4 sm:p-4 md:w-1/3">
                                <BulletWrapper className={ openTab === data.num ? 'block slide-right': 'hidden'}>
                                    <h4 className="font-semibold text-left">Features:</h4>
                                    {
                                        React.Children.toArray(
                                            data.features.map(({ id, amount, title }) => (                              
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
                                <p>Sum of the amount for checked subscribers: {Total(index)}</p>   
                                </BulletWrapper>
                            </div>
                        </ContentWrapper>
                    ))
                )
            }
        </div>
    )

};

export {Pricing};
