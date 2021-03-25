
import datas from "./pricing.json";
import CTA from '../CTA';
import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global';
import {OuterWrapper, Field, Price, LilDescrip, PBulletsWrapper, PBullets} from './style';

const index = () => {
    
    return (
        
            <div className="container px-5 mx-auto">
                <SectionHeader>Choose your product</SectionHeader>
                <SectionSubheader>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</SectionSubheader>

                <div className="hidden md:block">
                    <ContentWrapper>

                       {
                        datas.map((data, key) => (                     
                        
                        <OuterWrapper key={key}>
                            <div className={data.style}>
                                <Field>{data.field}</Field>
                                <Price>{data.price}</Price>
                                <LilDescrip>{data.description}</LilDescrip>
                                {
                                    data.bullets.map((data,key)=>(
                                        <PBulletsWrapper key={key}>
                                            <PBullets>
                                            <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                            </PBullets>{data.title}
                                        </PBulletsWrapper>
                                    ))
                                }                               
                            </div>
                        </OuterWrapper>  
                        ))
                       }                         
                        
                    </ContentWrapper>
                </div>
                <div className="md:hidden">
                 {/*********responsive************** */} 
                </div>
               <CTA buttonName={'Contact us'}/>
            </div>
        
        

    )
}

export default index
