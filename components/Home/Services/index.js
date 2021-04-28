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
                <div className="hidden md:block">
                    <div className="w-full inline-flex">                                                
                        <div className="sm:w-2/4 flex flex-col border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in">                           
                            <SoftDSVG/>                           
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
                            <div className={openTab === 1 ? "open" : "hidden"} id="link1" >                             
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
                        </div>                        
                        <div className="sm:w-2/4 flex flex-col border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in">                                                                               
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
                            <div className={openTab === 2 ? "open" : "hidden"} id="link2">                   
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
                        </div>
                    </div>
                </div>
                {/* <IconWrapper className={openTab === 2 || openTab === 1 ? "hidden" : "block" }>                                   
                        <div className="sm:w-2/4 flex flex-col">                           
                                <SoftDSVG/>                           
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
                        
                        <div className="sm:w-2/4 flex flex-col"> 
                            <div className={openTab === 1 ? "absolute right-0" : ""}>                                                   
                                <DataScSVG />
                            </div>
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
                     <div className={openTab === 1 ? "flex absolute top-0 left-0 z-10 w-full h-full" : "hidden"}>
                        <div className="sm:w-1/4 flex flex-col">                            
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
                        <div className="pl-2 sm:w-3/4 open" id="link1" >                             
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
                     </div>   
                     <div className={openTab === 2 ? "flex absolute top-0 left-0 z-10 w-full h-full" : "hidden"}>
                        <div className="w-1/4">                                                  
                                <SoftDSVG/>
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
                        <div className="pl-2 sm:w-3/4 open" id="link2">                   
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
                     </div>
                    
                                    
                </TabContent> */}
            </ContentWrapper>
        </div>       
        
    )
}

export default Services
