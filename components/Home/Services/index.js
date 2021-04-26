import datas from "./data.json";
import {useState} from 'react'
import {ContentWrapper, SectionSubheader}from '../../../styles/global';
import {IconWrapper, IconTitle, TabContent, BulletTitle, BulletSubtitle, ServiceBulletsOuter, ServiceBulletsSpan} from './styles';
import SoftDSVG from './SoftDSVG'
import DataScSVG from './DataScSVG'

const Services = () => {
    
    // const [tab1, isTabOne] = useState(true);
	// const [tab2, isTabTwo] = useState(false)

    // const handleClick1 = () => {
	// 	isTabOne(tab1=>!tab1);
	// 	isTabTwo(tab2=>!tab2);
	// };	
    // const handleClick2 = () => {
	// 	isTabOne(tab1=>!tab1);
	// 	isTabTwo(tab2=>!tab2);
    // }; 
    const [openTab, setOpenTab] = useState(0);   
   
    return (
        <div className="container px-5 mx-auto">
            <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SectionSubheader>
            <ContentWrapper className="relative maxHeight">
                <IconWrapper>                   
                        <div className="sm:w-2/4 flex flex-col justify-center items-center">                            
                            <SoftDSVG />
                        <IconTitle onClick={e => 
                        { 
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist">
                            Software Development
                        </IconTitle>
                        </div>
                        <div className="sm:w-2/4 flex flex-col justify-center items-center">                            
                            <DataScSVG />
                        <IconTitle onClick={e => 
                        {
                        e.preventDefault();
                        setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist">
                            Data Science
                        </IconTitle>
                        </div>                    
                </IconWrapper>
                <TabContent>                   
                                                  
                    <div className={`${openTab === 1 ? "open" : "hidden"} pl-2`} id="link1" >
                    <a className="flex justify-end" href="#" onClick={e =>
                    {
                    e.preventDefault();
                    setOpenTab(0);
                    }} >
                    <svg className="h-8 w-8 text-primary"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </a>
                    {
                        datas.soft.map((data, key) => (
                            <div className="ml-2" key={key}>
                                <BulletTitle>{data.title}</BulletTitle>
                                <BulletSubtitle>{data.subtitle}</BulletSubtitle>
                            {
                                data.items.map((data,key1)=>(
                                <div  key={key1}> 
                                    <ServiceBulletsOuter>
                                        <ServiceBulletsSpan>
                                        <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                        </ServiceBulletsSpan>{data.tit}
                                    </ServiceBulletsOuter>
                                </div>
                                ))
                            }
                            </div>
                        ))
                    }
                        
                    </div>
                    <div className={`${openTab === 2 ? "open" : "hidden"} pl-2`} id="link2">
                    <a className="flex justify-end" href="#" onClick={e =>
                    {
                    e.preventDefault();
                    setOpenTab(0);
                    }} >
                    <svg className="h-8 w-8 text-primary"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </a>
                    {
                        datas.data.map((data, key) => (
                            <div  key={key}>
                            <BulletTitle>{data.title}</BulletTitle>
                            <BulletSubtitle>{data.subtitle}</BulletSubtitle>
                            {
                                data.items.map((data,key1)=>(
                                <div  key={key1}>
                                    <ServiceBulletsOuter>
                                        <ServiceBulletsSpan>
                                        <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                        </ServiceBulletsSpan>{data.tit}
                                    </ServiceBulletsOuter>
                                </div>  
                                ))
                            }
                            </div>
                        ))
                    }
                    </div>                      
                </TabContent>
            </ContentWrapper>
        </div>       
        
    )
}

export default Services
