import React from 'react'
import datas from "./data.json";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const StudyCases = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,        
        responsive: [

        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    }
    return (        
    <div className="container px-5 mx-auto">
        <h2 className="mt-4">Check out our solutions</h2>
        <h4 className="mb-6">Commitment and creativity mark our creations. By all means, stroll along...</h4>
        <div className="hidden md:block">
            <div className="flex flex-wrap -m-4">    
               {
                    datas.map((data, key) => (
                        <div className="p-4 md:w-1/3" key={key}>                
                            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden mx-4 md:mx-0">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.src} alt={data.alt} />
                                <div className="bg-secondary2 h-8 flex justify-start items-center">
                                    <h2 className="tracking-widest text-sm font-semibold text-white ml-2">CATEGORY</h2>
                                </div>  
                                <div className="p-4">                                                      
                                    <h1 className="title-font text-lg font-bold text-primary mb-3">{data.title}</h1>
                                    <p className="mt-2 text-base leading-6 text-gray-500">{data.description}</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a href="" className="text-secondary2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>    
                            </div>
                        </div> 
                    ))
               }                    
            </div>
        </div> 
        <div className="md:hidden">
            <Slider {...settings}> 
            {
                datas.map((data, key) => (
                    <div className="p-4 md:w-1/3" key={key}>                
                        <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden mx-4 md:mx-0">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.src} alt={data.alt} />
                            <div className="bg-secondary2 h-8 flex justify-start items-center">
                                <h2 className="tracking-widest text-sm font-semibold text-white ml-2">CATEGORY</h2>
                            </div>  
                            <div className="p-4">                                                      
                                <h1 className="title-font text-lg font-bold text-primary mb-3">{data.title}</h1>
                                <p className="mt-2 text-base leading-6 text-gray-500">{data.description}</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="" className="text-secondary2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>    
                        </div>
                    </div> 
                ))
            }                                       
            </Slider>
        </div>   

    </div>  
        
        
    )
}

export default StudyCases
