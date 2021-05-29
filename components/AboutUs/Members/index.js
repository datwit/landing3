import datas from "./team.json";
import {MemberCol, MemberDesig, MemberRol, MemberCol2, CarouselInner} from './style'
import {ContentWrapper} from '../../../styles/global';
import uuid from 'react-uuid'
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {OuterWrapper, CarouselContainer} from '../../Home/Pricing/style';
import MemberCard from './MemberCard'
import {DataBlock, ColName, SocialWrapper} from '../Collaborators/style'
import Carousel from 'react-elastic-carousel'

// const Carousel = require('react-responsive-carousel').Carousel;

const Members = () => {      
   

    return (
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 mt-0 md:mt-12">
            <h2 className="mt-4">Meet our team</h2>
            <h4 className="mb-4">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</h4>
            <div className="hidden md:block">
                <ContentWrapper>
                    <Carousel itemsToShow={3}>
                    {                       
                        datas.map(data => (
                            <div key={uuid()}>
                                <MemberCol> 
                                    <MemberCard name={data.name} designation={data.designation} rol={data.rol} twitter={data.twitter} linkedin={data.linkedin} github={data.github} />                          
                                </MemberCol> 
                            </div>
                                                
                        ))
                    }                                   
                </Carousel>                     
                    {/* {                       
                    datas.list1.map(data => (
                        <div className="p-5 sm:w-1/3 lg:w-1/5" key={uuid()}>
                            <MemberCol> 
                                <MemberCard name={data.name} designation={data.designation} rol={data.rol} twitter={data.twitter} linkedin={data.linkedin} github={data.github} />                          
                            </MemberCol> 
                        </div>
                                              
                    ))
                    }
                    {                       
                    datas.list2.map(data => (
                        <div className="p-5 sm:w-1/2 lg:w-1/5 flex justify-center" key={uuid()}>
                            <MemberCol2>                            
                                <MemberCard name={data.name} designation={data.designation} rol={data.rol} twitter={data.twitter} linkedin={data.linkedin} github={data.github} />                      
                            </MemberCol2>
                        </div>                      
                    ))
                    }                     */}

                </ContentWrapper>
            </div> 
            {/******responsive********************/}
            <div className="md:hidden">
                <CarouselContainer>
                    <Carousel showArrows={true} showThumbs={false}>
                    {
                        datas.map(data => (   
                        <OuterWrapper key={uuid()}>
                                <div>                            
                                <img alt="team" className="flex-shrink-0 rounded-lg h-36 w-36 object-cover object-center mb-4" src="" />
                                <div className="w-full">
                                    <ColName>{data.name}</ColName>
                                    <MemberDesig>{data.designation}</MemberDesig>
                                    <MemberRol>{data.rol}</MemberRol>
                                    <SocialWrapper>
                                        <a href={data.twitter}>
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                        </a>
                                        <a href={data.linkedin} className="ml-2 text-gray-500">
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                                        </a>
                                        <a href={data.github}  className="ml-2 text-gray-500">
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                        </a>
                                    </SocialWrapper>
                                </div>                            
                            </div>
                        </OuterWrapper>  
                        ))
                    }
                    {/* {
                        datas.list2.map(data => (   
                        <OuterWrapper key={uuid()}>
                                <div>                            
                                <img alt="team" className="flex-shrink-0 rounded-lg h-36 w-36 object-cover object-center mb-4" src="" />
                                <div className="w-full">
                                    <ColName>{data.name}</ColName>
                                    <MemberDesig>{data.designation}</MemberDesig>
                                    <MemberRol>{data.rol}</MemberRol>
                                    <SocialWrapper>
                                        <a href={data.twitter}>
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                        </a>
                                        <a href={data.linkedin} className="ml-2 text-gray-500">
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                                        </a>
                                        <a href={data.github}  className="ml-2 text-gray-500">
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                        </a>
                                    </SocialWrapper>
                                </div>                            
                            </div>
                        </OuterWrapper>  
                        ))
                    }                            */}
                    </Carousel>
                </CarouselContainer>

            </div>
                
           
        </div>
   
    )
}

export default Members
