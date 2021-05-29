import datas from "./data.json";
import {SCardWrapper} from './style';
import {ContentWrapper, SectionSubheader, SectionHeader} from '../../../styles/global';
import { BlogCardBorder, RespBlock, BlogTitle2} from '../../../components/Blog/style'
import Link from "next/link"
import uuid from 'react-uuid'
import StudyCasesCard from './StudyCasesCard';

const StudyCases = () => {
    
    return (        
    <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4 md:mt-8">
        <SectionHeader>Check out our solutions</SectionHeader>
        <SectionSubheader>Commitment and creativity mark our creations. By all means, stroll along...</SectionSubheader>
        <div className="hidden md:block">
            <ContentWrapper>    
               {
                    datas.map(data => (
                        <SCardWrapper key={uuid()}>                           
                            <StudyCasesCard img={data.img} title={data.title} id={data.id} summary={data.summary}/>
                        </SCardWrapper> 
                    ))
               }                    
            </ContentWrapper>
        </div> 
        <div className="md:hidden">                                      
         {/**********responsive************** */}            
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
