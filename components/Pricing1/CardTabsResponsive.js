
import { CardPriceCont, ToggleWrapper, BundleChooser, Field, Price, LilDescrip, FullPricingCard, BulletWrapper, ButtonPrice} from './style'
import datas from "./pricing.json"
import {MainPricingCard} from './MainPricingCard'
import {BulletsContent}  from './BulletsContent'
import {ContentWrapper} from 'styles/global'
import React,{ useState } from 'react'
import { GrSystem,GrServerCluster, GrCode } from "react-icons/gr"
import Link from 'next/link'
import { FiSend } from 'react-icons/fi'


const CardTabsResponsive = () => {
    
    const [openTab, setOpenTab] = useState(1);

    return (
        <>
            <div className="w-full">
                <ToggleWrapper>
                    <BundleChooser  color={openTab === datas[0].num ? "#e69c24" : ""} className={openTab === datas[0].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(datas[0].num);
                        }}>
                        <GrServerCluster className="h-10 w-10"/>                      
                    </BundleChooser>
                    <BundleChooser  color={openTab === datas[1].num ? "#00baff" : ""} className={openTab === datas[1].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(datas[1].num);
                        }}>
                        <GrSystem className="h-10 w-10"/>                       
                    </BundleChooser>
                        <BundleChooser  color={openTab === datas[2].num ? "#1e4158" : ""} className={openTab === datas[2].num ? "open" : ""}
                        onClick={e =>
                        {
                        e.preventDefault();
                        setOpenTab(datas[2].num);
                        }}>
                        <GrCode className="h-10 w-10"/>                        
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
                                    <div className="flex justify-content my-4">
                                        <Link href="/contact">
                                            <ButtonPrice className={
                                                (data.style === 'secondary2' && 'naranja')
                                                || (data.style === 'secondary1' && 'azul')
                                                || (data.style === 'primary' && 'dark')
                                            }
                                            > Contact us
                                                <FiSend className={`h-6 w-6 ml-2`}/>
                                            </ButtonPrice>
                                        </Link>
                                    </div>                                                    
                                </FullPricingCard> 
                            </CardPriceCont>
                            <div className= "px-4 sm:p-4 w-full">
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
        </>
    )
}

export {CardTabsResponsive}
