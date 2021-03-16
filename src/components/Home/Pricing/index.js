import React from 'react'
import * as DATA from "./data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

                        {/*--------------------------------------------------------------------------------*/}
                        <div className="p-4 md:w-1/3 w-full">
                            <div className="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD1.field}</h2>
                                <h1 className="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD1.price}</h1>
                                <p className="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD1.description}</p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD1.b1}
                                </p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD1.b2}
                                </p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD1.b3}
                                </p>
                            </div>
                        </div>
                        {/*--------------------------------------------------------------------------------*/}
                        <div className="p-4 md:w-1/3 w-full">
                            <div className="md:h-full p-3 border-2 border-secondary2 border-opacity-60 overflow-hidden relative">
                                <span className="bg-secondary2 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD2.field}</h2>
                                <h1 className="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD2.price}</h1>
                                <p className="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD2.description}</p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD2.b1}
                                </p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD2.b2}
                                </p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD2.b3}
                                </p>
                            </div>
                        </div>
                        {/*--------------------------------------------------------------------------------*/}
                        <div className="p-4 md:w-1/3 w-full">
                            <div className="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD3.field}</h2>
                                <h1 className="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD3.price}</h1>
                                <p className="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD1.description}</p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD3.b1}
                                </p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD3.b2}
                                </p>
                                <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD3.b3}
                                </p>
                            </div>
                        </div>
                        
                            
                        <div className="mx-auto flex justify-center items-center flex-col">
                        <h3 className="mb-5">Let's work together</h3>
                        <a className="btn" href="/contact">Contact us</a>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <Slider {...settings}> 
                        <div>
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD1.field}</h2>
                                    <h1 className="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD1.price}</h1>
                                    <p className="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD1.description}</p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD1.b1}
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD1.b2}
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD1.b3}
                                    </p>
                                </div>
                            </div>
                        </div>
                       <div>
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="md:h-full p-3 border-2 border-secondary2 border-opacity-60 overflow-hidden relative">
                                    <span className="bg-secondary2 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD2.field}</h2>
                                    <h1 className="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD2.price}</h1>
                                    <p className="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD2.description}</p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD2.b1}
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD2.b2}
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD2.b3}
                                    </p>
                                </div>
                            </div>
                        </div>
                       <div>
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD2.field}</h2>
                                    <h1 className="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD2.price}</h1>
                                    <p className="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD2.description}</p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD2.b1}
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD2.b2}
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                        <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </span>{DATA.CARD2.b3}
                                    </p>
                                </div>
                            </div>
                       </div>
                    </Slider>
                </div>
            </div>
        
        

    )
}

export default index
