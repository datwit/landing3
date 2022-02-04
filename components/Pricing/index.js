import React,{ useState } from 'react'
import { GrSystem,GrServerCluster, GrCode } from "react-icons/gr"
import {PricingButton} from '../Pricing1/PricingButton'
import { CardPriceCont, TabText, TabWrapper, ToggleWrapper, BundleChooser, Field, Price, LilDescrip, FullPricingCard, BulletWrapper} from '../Pricing1/style'
import datas from "../Pricing1/pricing.json"
import {BulletsContent}  from '../Pricing1/BulletsContent'
import {ContentWrapper} from 'styles/global'

const Pricing = ({classes}) => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className={classes}>
            <div>
                <ToggleWrapper>
                    <BundleChooser  color={openTab === datas[0].num ? "#e69c24" : ""} className={openTab === datas[0].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(datas[0].num);
                        }}>
                        <TabWrapper>                                
                            <GrServerCluster className="h-10 w-10 md:h-6 md:w-6"/>
                            <TabText color={openTab === datas[0].num ? "white" : "#4b4b4d"}>{datas[0].field}</TabText>
                        </TabWrapper>                      
                    </BundleChooser>
                    <BundleChooser  color={openTab === datas[1].num ? "#00baff" : ""} className={openTab === datas[1].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(datas[1].num);
                        }}>
                        <TabWrapper>    
                            <GrSystem className="h-10 w-10 md:h-6 md:w-6"/>  
                            <TabText color={openTab === datas[1].num ? "white" : "#4b4b4d"}>{datas[1].field}</TabText>
                        </TabWrapper>                     
                    </BundleChooser>
                        <BundleChooser  color={openTab === datas[2].num ? "#1e4158" : ""} className={openTab === datas[2].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(datas[2].num);
                        }}>
                        <TabWrapper>
                            <GrCode className="h-10 w-10 md:h-6 md:w-6"/> 
                            <TabText color={openTab === datas[2].num ? "white" : "#4b4b4d"}>{datas[2].field}</TabText>
                        </TabWrapper>                       
                    </BundleChooser>
                </ToggleWrapper>
            </div>
            {
                React.Children.toArray(
                    datas.map(data => (
                        <ContentWrapper className={openTab === data.num ? "block" : "hidden"}>
                            <CardPriceCont className={openTab === data.num ? "block slide-left" : "hidden"}>
                                <FullPricingCard className={`border-${data.style}`}>
                                    <div className={`bg-${data.style}`}><Field>{data.field}</Field></div>
                                    <div className="p-3">
                                        <span className="flex justify-center items-baseline my-2"><Price>{data.price}</Price><p className="m-0"> /hr</p></span>
                                        <h4 className="text-sm font-semibold pb-2">billed monthly</h4>
                                        <LilDescrip>{data.description}</LilDescrip>                   
                                    </div>                                   
                                    <PricingButton style={data.style}/>                                                    
                                </FullPricingCard> 
                            </CardPriceCont>
                            <div className= "px-4 sm:p-4 md:w-1/3">
                                <BulletWrapper className={ openTab === data.num ? 'block slide-right': 'hidden'}>
                                    <h4 className="font-semibold text-left">What's included:</h4>
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
                    ))
                )
            }
        </div>
    )

};

export {Pricing};
