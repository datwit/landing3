import datas from "./data.json";
import {SCardWrapper, SCardBorder, CardContent, CardTitle, CardSubtitle, ReadMore} from './style';
import {ContentWrapper, SectionSubheader, SectionHeader} from '../../../styles/global';
import { CardSummary, BlogCardBorder, RespBlock, BlogTitle2, DateWrapper} from '../../../components/Blog/style'
import Link from "next/link"

const StudyCases = () => {
    
    return (        
    <div className="container px-5 mx-auto">
        <SectionHeader>Check out our solutions</SectionHeader>
        <SectionSubheader>Commitment and creativity mark our creations. By all means, stroll along...</SectionSubheader>
        <div className="hidden md:block">
            <ContentWrapper>    
               {
                    datas.map((data, key) => (
                        <SCardWrapper key={key}>                
                            <SCardBorder>
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.src} alt={data.alt} />                                
                                <CardContent>                                                      
                                    <CardTitle>{data.title}</CardTitle>
                                    <CardSubtitle>{data.description}</CardSubtitle>                                    
                                        <ReadMore href="" >Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </ReadMore>                                    
                                </CardContent>    
                            </SCardBorder>
                        </SCardWrapper> 
                    ))
               }                    
            </ContentWrapper>
        </div> 
        <div className="md:hidden">                                      
         {/**********responsive************** */}
         <ul>
            {
                datas.map((data, key1) => (
                    <li className="" key={key1}>                        
                        <div className="mx-4 md:mx-0 mb-3">
                            <div className="flex">
                                <img src={data.src}  className="sm:w-1/5 w-1/2"  alt={data.alt}/>
                                <RespBlock>                                  
                                    <Link href={`/studycases/${data.id}`}><BlogTitle2>{data.title}</BlogTitle2></Link>                                      
                                    
                                    <p className="">{data.summary}</p>
                                </RespBlock>  
                            </div>                        
                        </div>
                    </li>
                )) 
            }
         </ul>
           
        </div>  
    </div>  
        
        
    )
}

export default StudyCases
