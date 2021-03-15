import React from 'react'

const Datwit = () => {
    return (
        <div className="container px-5 mx-auto">
            <div className="mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full">
                    <img alt="img" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="" />  
                </div>                
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-primary text-3xl title-font font-semibold mb-1 text-center">Datwit</h1>
                    <p className="leading-relaxed text-justify">We are a Serbian Company dedicated to creating multipurpose software solutions
                        integrating modern techniques
                        like Cloud Computing, Machine Learning, Data Analysis and microservices.
                        Datwit develops small web apps with full artificial intelligence capabilities.
                        <br />
                        <br />
                        Take a look to our open solutions
                        <a className="inline-block" href="https://github.com/datwit"><svg className="h-8 w-8 text-secondary2 ml-4"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Datwit
