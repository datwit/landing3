import {SectionSubheader, ContentWrapper} from '../../styles/global'
import Dropdown from './Dropdown'

const BlogList = () => (
    <div className="container px-5 mx-auto">        
        <SectionSubheader>Discover interesting ideas and unique perspectives from our amazing crew</SectionSubheader>
        <ContentWrapper>            
                <div className="w-full md:w-1/2">
                    <label htmlFor=""></label>
                    <Dropdown />
                </div>
                <div className="w-full md:w-1/2"> 
                    <div className="flex items-center">
                        <input type="text" name="search" placeholder="Search here" className="w-3/4 rounded border border-gray-300 bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 focus:border-primary focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out"/>
                        <svg class="h-6 w-6 text-gray-700 opacity-40"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                    </div>            
                    
                </div>                     
        </ContentWrapper>
        <ContentWrapper>
            <div className="w-full mt-6">
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden mx-4 md:mx-0">
                        <img className="lg:h-48 md:h-28 w-full object-cover object-center" src="" alt="" />
                        <div className="p-4">
                            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                            <h1 className="title-font text-lg font-bold text-primary mb-1">Lorem Ipsum</h1>
                            <p className="mt-0 text-base leading-6 text-gray-500">Non qui laboris excepteur magna dolor aliqua tempor irure.</p>
                            <div className="flex items-center flex-wrap ">
                                <a className="text-secondary2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </ContentWrapper>
    </div>
)

export default BlogList
