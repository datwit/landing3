import {ContentWrapper, SectionHeader} from '../../../styles/global'
import CTA from '../../Home/CTA'
import {useState} from 'react'
import datas from './data.json'
import uuid from 'react-uuid'
import {BulletWrapper, PricingCardGray, ToggleWrapper, BundleChooser, PriceTitle, PriceDescription, BulletText, BulletTextSpan, BulletsContainer} from './style';

const PartPricing = () => {    

    const [openTab, setOpenTab] = useState(1);

    return (
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 mt-24">
            <SectionHeader>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SectionHeader>            
            <div className="w-full">
                <ToggleWrapper role="tablist">                    
                    <BundleChooser  className={openTab === 1 ? "text-white bg-secondary2" : "text-secondary2 bg-white"}
                        onClick={e => 
                        { 
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist">Bundle 1
                    </BundleChooser>                   
                    <BundleChooser className={openTab === 2 ? "text-white bg-secondary2" : "text-secondary2 bg-white"}
                        onClick={e => 
                        {
                        e.preventDefault();
                        setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist">Bundle 2
                    </BundleChooser>                   
                    <BundleChooser className={openTab === 3 ? "text-white bg-secondary2" : "text-secondary2 bg-white"}
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
                    <PriceTitle>{datas[0].title}</PriceTitle>
                    <PriceDescription>{datas[0].description}</PriceDescription>
                    <h2 className="text-black" >{datas[0].price}</h2>
                    <div className="justify-center mt-2 md:my-8 select-none flex">                        
                        <CTA buttonName={'Contact us'} hhref='/contact'>
                            <svg className="h-6 w-6 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                        </CTA>
                    </div>
                </PricingCardGray>
                <BulletsContainer>
                    <BulletWrapper className={ openTab === 1 ? 'block slide-right': 'hidden'} >
                        {
                            datas[0].bullets.map(d => (
                                <li key={uuid()}>
                                    <BulletText>
                                        <BulletTextSpan>
                                        <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
                                        </BulletTextSpan>{d.title}
                                    </BulletText>
                                </li>
                            ))
                        }                        
                    </BulletWrapper>
                </BulletsContainer>
            </ContentWrapper>  
            <ContentWrapper className={openTab === 2 ? "block" : "hidden"} id="link2">
                <PricingCardGray className={openTab === 2 ? "block slide-left" : "hidden"}  id="link1">
                    <PriceTitle>{datas[1].title}</PriceTitle>
                    <PriceDescription>{datas[1].description}</PriceDescription>
                    <h2 className="text-black" >{datas[1].price}</h2>
                    <div className="justify-center mt-2 md:my-8 select-none flex">
                        <CTA buttonName={'Contact us'} hhref='/contact'>
                             <svg className="h-6 w-6 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                        </CTA>
                    </div>
                </PricingCardGray>
                <BulletsContainer>
                    <BulletWrapper className={ openTab === 2 ? 'block slide-right': 'hidden'} >
                        {
                            datas[1].bullets.map(d => (
                                <li key={uuid()}>
                                    <BulletText>
                                        <BulletTextSpan>
                                        <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
                                        </BulletTextSpan>{d.title}
                                    </BulletText>
                                </li>
                            ))
                        }                        
                    </BulletWrapper>
                </BulletsContainer>
            </ContentWrapper>   
            <ContentWrapper className={openTab === 3 ? "block" : "hidden"} id="link3">
                <PricingCardGray className={openTab === 3 ? "block slide-left" : "hidden"}  id="link1">
                    <PriceTitle>{datas[2].title}</PriceTitle>
                    <PriceDescription>{datas[2].description}</PriceDescription>
                    <h2 className="text-black" >{datas[2].price}</h2>
                    <div className="justify-center mt-2 md:my-8 select-none flex">                        
                        <CTA buttonName={'Contact us'} hhref='/contact'>
                             <svg className="h-6 w-6 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                        </CTA>
                    </div>
                </PricingCardGray>
                <BulletsContainer>
                    <BulletWrapper className={ openTab === 3 ? 'block slide-right': 'hidden'} >
                        {
                            datas[2].bullets.map(d => (
                                <li key={uuid()}>
                                    <BulletText>
                                        <BulletTextSpan>
                                        <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
                                        </BulletTextSpan>{d.title}
                                    </BulletText>
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
  
