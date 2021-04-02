import {ContentWrapper, SectionHeader} from '../../../styles/global'
import React from 'react'

const PartPricing = () => {
    const [openTab, setOpenTab] = React.useState(1);
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
                    
                <div className="p-4 md:w-1/3 w-full bg-gray-100 bg-opacity-75 px-4 lg:px-8 py-4 lg:py-10 rounded-lg overflow-hidden text-center"  id="link1">
                    <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C users
                        after installed base benefits.
                        <br />
                        <br /> Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                    </p>
                </div>
            </ContentWrapper>  
            <ContentWrapper className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="p-4 md:w-1/3 w-full bg-gray-100 bg-opacity-75 px-4 lg:px-8 py-4 lg:py-10 rounded-lg overflow-hidden text-center"  id="link1">
                    <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate one-to-one
                        customer service with robust ideas.
                        <br />
                        <br />
                        Dynamically innovate resource-leveling customer service for
                        state of the art customer service.
                    </p>
                </div>

            </ContentWrapper>   
            <ContentWrapper className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="p-4 md:w-1/3 w-full bg-gray-100 bg-opacity-75 px-4 lg:px-8 py-4 lg:py-10 rounded-lg overflow-hidden text-center"  id="link1">
                    <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables for
                        real-time schemas.
                        <br />
                        <br /> Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                    </p>
                </div>
            </ContentWrapper>   
        </div>
    )
}
export default PartPricing
  
