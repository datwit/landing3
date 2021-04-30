import datas from "./data.json";
import {useState, useRef, useEffect} from 'react'
import {ContentWrapper, SectionSubheader}from '../../../styles/global';
import {CardRevealWrapper, IconTitle, TabContent, BulletTitle, BulletSubtitle, ServiceBulletsOuter, ServiceBulletsSpan, CardRevealBorder} from './styles';
import SoftDSVG from './SoftDSVG'
import DataScSVG from './DataScSVG'

const Services = () => {

    const [openTab, setOpenTab] = useState(0);   

    function useOutsideAlerter(ref) {
        useEffect(() => {           
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenTab(0);
                }
            }             
            document.addEventListener("mousedown", handleClickOutside);
            return () => {                
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);   
    
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
    

         
   
    return (        
        <div ref={wrapperRef} className="container px-5 mx-auto">
            <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SectionSubheader>
            
                <div className="hidden md:block">
                    <ContentWrapper>
                        <CardRevealWrapper>                                                
                            <CardRevealBorder>                           
                                {/*card image*/}
                                <div className="py-6">
                                    <SoftDSVG/> 
                                </div>                                 
                                {/*card title */}                         
                                <IconTitle onClick={e => 
                                    { 
                                    e.preventDefault();
                                    setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist">
                                        <h2>Software
                                        <br/>
                                         Development</h2>                                        
                                </IconTitle>
                                {/*card content-reveal*/}
                                <TabContent className={openTab === 1 ? "block h-full" : "h-0"} id="link1" >                             
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
                                </TabContent>
                                {/*/card content-reveal*/}
                            </CardRevealBorder> 
                        </CardRevealWrapper>
                        <CardRevealWrapper>
                            <CardRevealBorder>                                                                               
                                {/*card image*/}
                                <div className="py-6">
                                    <DataScSVG /> 
                                </div>                                 
                                {/*card title */}                           
                                <IconTitle onClick={e => 
                                    {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist">
                                        <h2>Data 
                                        <br/>
                                        Science</h2>
                                </IconTitle>
                                {/*card content-reveal*/}
                                <TabContent className={openTab === 2 ? "block h-full" : "h-0"} id="link2">                   
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
                                </TabContent>
                                {/*/card content-reveal*/}
                            </CardRevealBorder>
                        </CardRevealWrapper>                  
                    </ContentWrapper>
                </div>               
        </div>       
        
    )
}

export default Services
