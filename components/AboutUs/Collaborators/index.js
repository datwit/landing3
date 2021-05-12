import datas from "./collaborators.json";
import {ColWrapper, DataBlock, ColName, ColRol, SocialWrapper} from './style';
import {ContentWrapper} from '../../../styles/global';
import uuid from 'react-uuid'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {OuterWrapper, CarouselContainer} from '../../Home/Pricing/style';

const Carousel = require('react-responsive-carousel').Carousel;



const Collaborators = () => {
    
    return (
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4  mt-0 md:mt-14">
            <h2 className="mt-4">Collaborators</h2>
            <h4 className="mb-6">Our amazing collaborators help drive Datwit towards being a cutting-edge company</h4>
            <div className="hidden md:block">
                <ContentWrapper>
                    {                       
                    datas.map(data => (
                        <ColWrapper key={uuid()}>                            
                            <img alt="team" className="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                            <DataBlock>
                                <ColName>{data.name}</ColName>
                                <ColRol>{data.designation}</ColRol>
                                <SocialWrapper>
                                    <a href={data.twitter}>
                                        <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                    </a>
                                    <a href={data.linkedin} className="ml-2 text-gray-500">
                                        <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                    <a  href={data.github} className="ml-2 text-gray-500">
                                        <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                    </a>
                                </SocialWrapper>
                            </DataBlock>                            
                        </ColWrapper>
                    ))
                    }                   
                </ContentWrapper>
            </div>
        <div className="md:hidden">
            <CarouselContainer>
                    <Carousel showArrows={true} showThumbs={false}>
                    {
                        datas.map(data => (   
                        <OuterWrapper key={uuid()}>                                                       
                                <img alt="team" className="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                                <DataBlock>
                                    <ColName>{data.name}</ColName>
                                    <ColRol>{data.designation}</ColRol>
                                    <SocialWrapper>
                                        <a href={data.twitter}>
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                        </a>
                                        <a href={data.linkedin} className="ml-2 text-gray-500">
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                                        </a>
                                        <a  href={data.github} className="ml-2 text-gray-500">
                                            <svg className="h-6 w-6 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                        </a>
                                    </SocialWrapper>
                                </DataBlock>    
                            
                        </OuterWrapper>  
                        ))
                    }
                    </Carousel>
            </CarouselContainer>           
        </div>    
    </div>
    )
}

export default Collaborators
