import datas from "./data.json";
import {SCardWrapper, SCardBorder, CardContent, CardTitle, CardSubtitle, ReadMore} from './style';
import {ContentWrapper, SectionSubheader, SectionHeader} from '../../../styles/global';
import { CardSummary, BlogCardBorder, RespBlock, BlogTitle2, DateWrapper} from '../../../components/Blog/style'
import Link from "next/link"
import uuid from 'react-uuid'

const StudyCases = () => {
    
    return (        
    <div className="container px-5 mx-auto">
        <SectionHeader>Check out our solutions</SectionHeader>
        <SectionSubheader>Commitment and creativity mark our creations. By all means, stroll along...</SectionSubheader>
        <div className="hidden md:block">
            <ContentWrapper>    
               {
                    datas.map(data => (
                        <SCardWrapper key={uuid()}>                
                            <SCardBorder>
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.img} alt="" />                                
                                <CardContent>                                                      
                                    <CardTitle>{data.title}</CardTitle>
                                    <CardSubtitle>{data.summary}</CardSubtitle>                                    
                                        <Link href={`/studycases/${data.id}`}>
                                            <ReadMore>Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </ReadMore>
                                        </Link>                                    
                                </CardContent>    
                            </SCardBorder>
                        </SCardWrapper> 
                    ))
               }                    
            </ContentWrapper>
        </div> 
        <div className="md:hidden">                                      
         {/**********responsive************** */}
            {/* <ul className="-top-2/4 transform translate-y-2/4"> */}
            <ul>
                {
                    datas.map(data => (
                        <BlogCardBorder key={uuid()} className="mb-3">
                            <div className="flex">
                            <img src={data.img} className="sm:w-1/4 w-1/2" alt="" />
                            <RespBlock>
                                <Link href={`/studycases/${data.id}`}>
                                    <BlogTitle2>{data.title}</BlogTitle2>
                                </Link>                            
                                <p>{data.author}</p>
                            </RespBlock>
                            </div>
                        </BlogCardBorder>
                    )) 
                }
            </ul>           
        </div>  
    </div>  
        
        
    )
}

export default StudyCases
