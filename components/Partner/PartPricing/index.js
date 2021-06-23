import {ContentWrapper, SectionHeader} from '../../../styles/global'
// import CTA from '../../Home/CTA'
import {useState} from 'react'
import datas from './data.json'
import uuid from 'react-uuid'
import {BulletWrapper, PricingCardGray, ToggleWrapper, BundleChooser, BulletsContainer} from './style';
import BulletsContent from './BulletsContent'
import PartnerCard from './PartnerCard'

const PartPricing = ({classes}) => {    

    const [openTab, setOpenTab] = useState(1);

    return (
        <div className={classes}>
            <SectionHeader>Our pricing strategy</SectionHeader>            
            <div className="w-full">
                <ToggleWrapper role="tablist">                    
                    <BundleChooser  className={openTab === 1 ? "text-white bg-secondary2" : "text-secondary2 bg-gray-100"}
                        onClick={e => 
                        { 
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist">Bundle 1
                    </BundleChooser>                   
                    <BundleChooser className={openTab === 2 ? "text-white bg-secondary2" : "text-secondary2 bg-gray-100"}
                        onClick={e => 
                        {
                        e.preventDefault();
                        setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist">Bundle 2
                    </BundleChooser>                   
                    <BundleChooser className={openTab === 3 ? "text-white bg-secondary2" : "text-secondary2 bg-gray-100"}
                        onClick={e => 
                        {
                        e.preventDefault();
                        setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist">Bundle 3
                    </BundleChooser>                   
                </ToggleWrapper>                
            </div>   
            
            <ContentWrapper className={openTab === 1 ? "block" : "hidden"} id="link1" >                   
                <PricingCardGray className={openTab === 1 ? "block slide-left" : "hidden"}  id="link1">
                        <PartnerCard  title={datas[0].title} description={datas[0].description} price={datas[0].price}/>                     
                </PricingCardGray>
                <BulletsContainer>
                    <BulletWrapper className={ openTab === 1 ? 'block slide-right': 'hidden'} >
                        {
                            datas[0].bullets.map(d => (
                                <li key={uuid()}>
                                    <BulletsContent title={d.title}/>
                                </li>
                            ))
                        }                        
                    </BulletWrapper>
                </BulletsContainer>
            </ContentWrapper>  
            <ContentWrapper className={openTab === 2 ? "block" : "hidden"} id="link2">
                <PricingCardGray className={openTab === 2 ? "block slide-left" : "hidden"}  id="link1">
                    <PartnerCard  title={datas[1].title} description={datas[1].description} price={datas[1].price}/>
                </PricingCardGray>
                <BulletsContainer>
                    <BulletWrapper className={ openTab === 2 ? 'block slide-right': 'hidden'} >
                        {
                            datas[1].bullets.map(d => (
                                <li key={uuid()}>
                                    <BulletsContent title={d.title}/>
                                </li>
                            ))
                        }                        
                    </BulletWrapper>
                </BulletsContainer>
            </ContentWrapper>   
            <ContentWrapper className={openTab === 3 ? "block" : "hidden"} id="link3">
                <PricingCardGray className={openTab === 3 ? "block slide-left" : "hidden"}  id="link1">
                    <PartnerCard  title={datas[2].title} description={datas[2].description} price={datas[2].price}/>
                </PricingCardGray>
                <BulletsContainer>
                    <BulletWrapper className={ openTab === 3 ? 'block slide-right': 'hidden'} >
                        {
                            datas[2].bullets.map(d => (
                                <li key={uuid()}>
                                    <BulletsContent title={d.title}/>
                                </li>
                            ))
                        }                        
                    </BulletWrapper>
                </BulletsContainer>
            </ContentWrapper>   
        </div>
    )
}
export default PartPricing
  
