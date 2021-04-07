import {ContentWrapper, SectionHeader} from '../../../styles/global'
import CTA from '../../Home/CTA';
import {useState} from 'react';
import datas from './data.json'

const PartPricing = () => {    

    const [openTab, setOpenTab] = useState(1);

    return (
        <div className="container px-5 mx-auto">
            <SectionHeader>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SectionHeader>            
            <div className="w-full">
                <div
                    className="flex mx-auto border-2 border-gray-200 border-opacity-60 rounded-full overflow-hidden mt-6 mb-6 justify-between lg:max-w-lg xl:max-w-xl"
                    role="tablist"
                >
                    
                    <a
                        className={
                        "py-1 px-4  rounded-full text-xs sm:text-base flex items-center" +
                        (openTab === 1
                            ? "text-white bg-secondary2" 
                            : "text-secondary2 bg-white")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        Profile
                    </a>                   
                    <a
                        className={
                        "py-1 px-4  rounded-full text-xs sm:text-base flex items-center" +
                        (openTab === 2
                            ? "text-white bg-secondary2" 
                            : "text-secondary2 bg-white")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                    >
                        Settings
                    </a>
                    
                    
                    <a
                        className={
                        "py-1 px-4  rounded-full text-xs sm:text-base flex items-center" +
                        (openTab === 3
                            ? "text-white bg-secondary2" 
                            : "text-secondary2 bg-white")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                    >
                        Options
                    </a>                   
                </div>                
            </div>           
            
            <ContentWrapper className={openTab === 1 ? "block" : "hidden"} id="link1" >            
                    
                <div className="p-4 md:w-1/3 w-full bg-gray-100 bg-opacity-75 px-4 py-4 lg:px-8 lg:py-10 rounded-lg overflow-hidden text-center"  id="link1">
                    <h1 className="title-font sm:text-2xl text-lg font-medium text-primary sm:mb-3">{datas[0].title}</h1>
                    <p className="leading-relaxed mb-3 text-sm sm:text-base">{datas[0].description}</p>
                    <h2 className="text-black" >{datas[0].price}</h2>
                    <div className="justify-center mt-2 md:my-8 select-none flex">
                        <CTA buttonName={'Contact us'}/>
                    </div>
                </div>
            </ContentWrapper>  
            <ContentWrapper className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="p-4 md:w-1/3 w-full bg-gray-100 bg-opacity-75 px-4 py-4 lg:px-8 lg:py-10 rounded-lg overflow-hidden text-center"  id="link1">
                    <h1 className="title-font sm:text-2xl text-lg font-medium text-primary sm:mb-3">{datas[1].title}</h1>
                    <p className="leading-relaxed mb-3 text-sm sm:text-base">{datas[1].description}</p>
                    <h2 className="text-black" >{datas[1].price}</h2>
                    <div className="justify-center mt-2 md:my-8 select-none flex">
                        <CTA buttonName={'Contact us'}/>
                    </div>
                </div>

            </ContentWrapper>   
            <ContentWrapper className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="p-4 md:w-1/3 w-full bg-gray-100 bg-opacity-75 px-4 py-4 lg:px-8 lg:py-10 rounded-lg overflow-hidden text-center"  id="link1">
                    <h1 className="title-font sm:text-2xl text-lg font-medium text-primary sm:mb-3">{datas[2].title}</h1>
                    <p className="leading-relaxed mb-3 text-sm sm:text-base">{datas[2].description}</p>
                    <h2 className="text-black" >{datas[2].price}</h2>
                    <div className="justify-center mt-2 md:my-8 select-none flex">
                        <CTA buttonName={'Contact us'}/>
                    </div>
                </div>
            </ContentWrapper>   
        </div>
    )
}
export default PartPricing
  
