
import {OuterWrapper, Field, CardPriceCont, Price, LilDescrip, PBulletsWrapper, CarouselContainer, BulletWrapper,ToggleWrapper, BundleChooser} from './style';
import PricingBullets from './PricingBullets';
import datas from "./pricing.json";
import Carousel from 'react-elastic-carousel'
import MainPricingCard from './MainPricingCard';
import BulletsContent  from './BulletsContent'
import {ContentWrapper} from 'styles/global';
import React,{ useRef, useState } from 'react';
import {AiOutlineCloudServer} from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { GrSystem,GrServerCluster, GrCode } from "react-icons/gr";


const CardTabsResponsive = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 }
    ]
    const [openTab, setOpenTab] = useState(1);

    return (
                <>
                   <div className="w-full">
                        <ToggleWrapper>

                           <BundleChooser  className={openTab === datas[0].num ? "open" : ""}
                               onClick={e =>
                               {
                               e.preventDefault();
                               setOpenTab(datas[0].num);
                               }}>
                               <GrServerCluster className="h-10 w-10"/>
                               {/*<h4>{datas[0].bundle}</h4>*/}
                           </BundleChooser>
                           <BundleChooser  className={openTab === datas[1].num ? "open" : ""}
                               onClick={e =>
                               {
                               e.preventDefault();
                               setOpenTab(datas[1].num);
                               }}>
                               <GrSystem className="h-10 w-10"/>
                             { /* <h4>{datas[1].bundle}</h4>*/}
                           </BundleChooser>
                             <BundleChooser  className={openTab === datas[2].num ? "open" : ""}
                               onClick={e =>
                               {
                               e.preventDefault();
                               setOpenTab(datas[2].num);
                               }}>
                               <GrCode className="h-10 w-10"/>
                              { /*<h4>{datas[2].bundle}</h4>*/}
                           </BundleChooser>

                       </ToggleWrapper>
                   </div>
                   {
                       React.Children.toArray(
                          datas.map(data => (
                                <ContentWrapper className={openTab === data.num ? "block" : "hidden"}>
                                    <CardPriceCont className={openTab === data.num ? "block slide-left" : "hidden"}>
                                        <MainPricingCard style={data.style} field={data.field} price={data.price} description={data.description}/>
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

export default CardTabsResponsive
