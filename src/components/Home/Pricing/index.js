import React from 'react'
import * as DATA from "./data"

const index = () => {
    return (
        
            <div class="container px-5 mx-auto">
                <h2 class="mt-4">Choose your product</h2>
                <h4 class="mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit...</h4>

                <div class="hidden md:block">
                    <div class="-m-4 flex flex-wrap">

                        {/*--------------------------------------------------------------------------------*/}
                        <div class="p-4 md:w-1/3 w-full">
                            <div class="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD1.field}</h2>
                                <h1 class="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD1.price}</h1>
                                <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD1.description}</p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD1.b1}
                                </p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD1.b2}
                                </p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD1.b3}
                                </p>
                            </div>
                        </div>
                        {/*--------------------------------------------------------------------------------*/}
                        <div class="p-4 md:w-1/3 w-full">
                            <div class="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD2.field}</h2>
                                <h1 class="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD2.price}</h1>
                                <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD2.description}</p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD2.b1}
                                </p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD2.b2}
                                </p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD2.b3}
                                </p>
                            </div>
                        </div>
                        {/*--------------------------------------------------------------------------------*/}
                        <div class="p-4 md:w-1/3 w-full">
                            <div class="md:h-full p-3 border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12">{DATA.CARD3.field}</h2>
                                <h1 class="text-5xl text-primary mb-1 leading-none mx-auto">{DATA.CARD3.price}</h1>
                                <p class="text-xs text-gray-500 mt-3 border-b border-gray-200">{DATA.CARD1.description}</p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD3.b1}
                                </p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD3.b2}
                                </p>
                                <p class="flex items-center text-gray-600 mb-2 text-xs sm:text-sm">
                                    <span class="w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </span>{DATA.CARD3.b3}
                                </p>
                            </div>
                        </div>
                        
                            
                        <div class="mx-auto flex justify-center items-center flex-col">
                        <h3 class="mb-5">Let's work together</h3>
                        <a class="btn" href="/contact">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        
        

    )
}

export default index
