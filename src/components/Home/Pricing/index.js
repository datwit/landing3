import React from 'react'
import datas from "./pricing.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CTA from '../CTA';

const index = () => {
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
                <h2 className="mt-4">Choose your product</h2>
                <h4 className="mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit...</h4>

                <div className="hidden md:block">
                    <div className="-m-4 flex flex-wrap">

                       {
                        datas.map((data, key) => (                     
                        
                        <div className="p-4 md:w-1/3 w-full" key={key}>
                            <div className={data.style}>
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{data.field}</h2>
                                <h1 className="text-5xl text-primary mb-1 leading-none mx-auto">{data.price}</h1>
                                <p className="text-xs text-gray-500 mt-3 border-b border-gray-200">{data.description}</p>
                                {
                                    data.bullets.map((data,key)=>(
                                        <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{data.title}
                                </p>
                                    ))
                                }                               
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
                        
                        <div className="p-4 md:w-1/3 w-full" key={key}>
                            <div className={data.style}>
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{data.field}</h2>
                                <h1 className="text-5xl text-primary mb-1 leading-none mx-auto">{data.price}</h1>
                                <p className="text-xs text-gray-500 mt-3 border-b border-gray-200">{data.description}</p>
                                {
                                    data.bullets.map((data,key)=>(
                                        <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{data.title}
                                </p>
                                    ))
                                }                               
                            </div>
                        </div>  
                        ))
                       }       
                    </Slider>
                </div>
               <CTA buttonName={'Contact us'}/>
            </div>
        
        

    )
}

export default index
