import {ContentWrapper, SectionHeader} from 'styles/global'
import React, {useState} from 'react'
import datas from './data.json'
import {BulletWrapper, PricingCardGray, ToggleWrapper, BundleChooser, BulletsContainer} from './style';
import BulletsContent from './BulletsContent'
import PartnerCard from './PartnerCard'

const PartPricing = ({classes}) => {

    const [openTab, setOpenTab] = useState(1);

    return (
        <div className={classes}>
            <SectionHeader>Our pricing strategy</SectionHeader>
            <div className="w-full">
                <ToggleWrapper>
                    {
                        React.Children.toArray(
                           datas.map(data =>(
                                <BundleChooser  className={openTab === data.num ? "text-white bg-secondary2" : "text-secondary2 bg-gray-100"}
                                    onClick={e =>
                                    {
                                    e.preventDefault();
                                    setOpenTab(data.num);
                                    }}>
                                    {data.bundle}
                                </BundleChooser>
                           ))
                        )
                    }
                </ToggleWrapper>
            </div>
            {
                React.Children.toArray(
                    datas.map(dat=>(
                        <ContentWrapper className={openTab === dat.num ? "block" : "hidden"}>
                            <PricingCardGray className={openTab === dat.num ? "block slide-left" : "hidden"}>
                                    <PartnerCard  title={dat.title} description={dat.description} price={dat.price}/>
                            </PricingCardGray>
                            <BulletsContainer>
                                <BulletWrapper className={ openTab === dat.num ? 'block slide-right': 'hidden'} >
                                    {
                                        React.Children.toArray(
                                            dat.bullets.map(d => (
                                                <li>
                                                    <BulletsContent title={d.title}/>
                                                </li>
                                            ))
                                        )
                                    }
                                </BulletWrapper>
                            </BulletsContainer>
                        </ContentWrapper>
                    ))
                )
            }
        </div>
    )
}
export default PartPricing

