import datas from "./data.json";
import {useState, useRef, useEffect} from 'react'
import {ContentWrapper, SectionSubheader}from '../../../styles/global';
import {ServTabContent, CardRevealWrapper, IconTitle, CardContent, BulletTitle, BulletSubtitle, ServiceBulletsOuter, ServiceBulletsSpan, CardRevealBorder} from './styles';
import SoftDSVG from './SoftDSVG'
import DataScSVG from './DataScSVG'

const Services = () => {

    const [openTab, setOpenTab] = useState(0); 
    const [openTab1, setOpenTab1] = useState(1); 
    const [openCard1, setOpenCard1] = useState(false)
    const [openCard2, setOpenCard2] = useState(false) 

    function useOutsideAlerter(ref) {
        useEffect(() => {           
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenCard1(openCard1)
                    setOpenCard2(openCard2)
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
                                    setOpenCard1(!openCard1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist">
                                        <h2>Software
                                        <br/>
                                         Development</h2>                                        
                                </IconTitle>
                                {/*card content-reveal*/}
                                <CardContent className={openCard1 ? "block h-full" : "h-0"} id="link1" > 
                                    <div className="p-3">
                                        <a className="flex justify-end" href="#" onClick={e =>
                                        {
                                        e.preventDefault();
                                        setOpenCard1(!openCard1);
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
                                </CardContent>
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
                                    setOpenCard2(!openCard2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist">
                                        <h2>Data 
                                        <br/>
                                        Science</h2>
                                </IconTitle>
                                {/*card content-reveal*/}
                                <CardContent className={openCard2 ? "block h-full" : "h-0"} id="link2"> 
                                    <div className="p-3">
                                        <a className="flex justify-end" href="#" onClick={e =>
                                        {
                                        e.preventDefault();
                                        setOpenCard2(!openCard2);
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
                                </CardContent>
                                {/*/card content-reveal*/}
                            </CardRevealBorder>
                        </CardRevealWrapper>                  
                    </ContentWrapper>
                </div> 
                {/*responsive*/}
                <div className="md:hidden">
                    <ContentWrapper>
                        <div className="sm:w-1/4 h-full w-full">
                            <div className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row sm:flex-col">
                                <div className="-mb-px mr-2 flex-auto text-center flex items-center sm:pb-12 flex-col">
                                    <a href="#" className={`${openTab1 === 1 ? "text-secondary2" : "text-primary"} flex flex-col items-center`} onClick={e => 
                                    {
                                    e.preventDefault();
                                    setOpenTab1(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1">
                                    <svg className= "h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6" />  <polyline points="8 6 2 12 8 18" />
                                    </svg>
                                    <div className="text-base font-bold  block leading-normal relative cursor-pointer">
                                        Software
                                        <br />
                                        Development
                                    </div>
                                    </a> 
                                </div>
                                <div className="-mb-px mr-2 flex-auto text-center flex items-center sm:pb-12 flex-col">
                                    <a href="#" className={`${openTab1 === 2 ? "text-secondary2" : "text-primary"} flex flex-col items-center`} onClick={e => 
                                    {
                                    e.preventDefault();
                                    setOpenTab1(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2">
                                        <svg className= "h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>  
                                            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                                            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                                        </svg>
                                        <div className="text-base font-bold  block leading-normal relative cursor-pointer">
                                            Data 
                                            <br />
                                            Science
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ServTabContent>
                            <div className="px-4 flex-auto border-2 border-gray-200 border-opacity-60">
                                <div className={openTab1 === 1 ? "block" : "hidden"}>
                                    {
                                    datas.soft.map((data, key) => (
                                        <div key={key}>
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
                                <div className={openTab1 === 2 ? "block" : "hidden"}> 
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

                        </ServTabContent>

                    </ContentWrapper>

                </div>              
        </div>       
        
    )
}

export default Services
