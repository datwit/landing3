import datas from "./data.json";
import {useState} from 'react'


const Services = () => {
    
    const [tab1, isTabOne] = useState(true);
	const [tab2, isTabTwo] = useState(false)

    const handleClick1 = () => {
		isTabOne(tab1=>!tab1);
		isTabTwo(tab2=>!tab2);
	};	
    const handleClick2 = () => {
		isTabOne(tab1=>!tab1);
		isTabTwo(tab2=>!tab2);
    };    
   
    return (
        <div className="container px-5 mx-auto">
            <h4 className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <div className="flex flex-wrap -m-4">
                <div className="sm:w-1/4 h-full w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row sm:flex-col">
                        <li className="-mb-px mr-2 flex-auto text-center flex items-center sm:pb-12 flex-col">
                        <svg className={`${tab1 ? 'text-secondary2':'text-primary'} h-8 w-8`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"
                            >
                            <polyline points="16 18 22 12 16 6" />  <polyline points="8 6 2 12 8 18" />
                        </svg>
                        <a className={`${tab1 ? 'text-secondary2':'text-primary'} text-base font-bold  block leading-normal relative cursor-pointer`} onClick = {handleClick1}>
                            Software
                            <br />
                            Development
                        </a>
                        </li>
                        <li className="-mb-px mr-2 flex-auto text-center flex items-center flex-col">
                        <svg className={`${tab2 ? 'text-secondary2':'text-primary'} h-8 w-8`}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                            >  <path stroke="none" d="M0 0h24v24H0z"/>
                            <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                        </svg>
                        <a className={`${tab2 ? 'text-secondary2':'text-primary'} text-base font-bold  block leading-normal relative cursor-pointer`} onClick = {handleClick2}>
                            Data
                            <br />
                            Science
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="sm:w-3/4 relative flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 shadow-lg">
                    <div className="px-4 flex-auto border-2 border-gray-200 border-opacity-60">                       
                            <div className={tab1 ? 'block' : 'hidden'}>
                            {
                                datas.soft.map((data, key) => (
                                    <>
                                    <h2 className= "text-lg mt-2 text-left" key={key}>{data.title}</h2>
                                    <p className="text-base mt-2">{data.subtitle}</p>
                                    {
                                      data.items.map((data,key)=>(
                                        <p className="text-base mt-2 flex items-baseline" key={key}>
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                        </span>{data.tit}</p>

                                      ))
                                    }
                                    </>
                                ))
                            }
                                
                            </div>
                            <div className={tab2 ? 'block' : 'hidden'}>
                            {
                                datas.data.map((data, key) => (
                                    <>
                                    <h2 className= "text-lg mt-2 text-left" key={key}>{data.title}</h2>
                                    <p className="text-base mt-2">{data.subtitle}</p>
                                    {
                                      data.items.map((data,key)=>(
                                        <p className="text-base mt-2 flex items-baseline" key={key}>
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                        </span>{data.tit}</p>

                                      ))
                                    }
                                    </>
                                ))
                            }
                            </div>                       
                    </div>
                </div>
            </div>
        </div>
        // <TabContainer>
        //     <TabHead>
        //         <Tab onClick={isTabOne}>     
                    
        //                 <a>Tab 1</a>
                    
        //         </Tab>     
        //         <Tab onClick={isTabTwo}>
                
        //             <a>Tab 2</a>
               
        //         </Tab>
        //     </TabHead>
        //     <TabBody>
        //         {isTabOne && <Fragment>This is tab one content</Fragment>}
        //         {isTabTwo && <Fragment>This is tab two content</Fragment>}
        //     </TabBody>
           
        // </TabContainer>
        
    )
}

export default Services
