import datas from "./data.json";
import {SCardWrapper, SCardBorder, CardContent, CardTitle, CardSubtitle, ReadMore} from './style';
import {ContentWrapper, SectionSubheader, SectionHeader} from '../../../styles/global';


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
        </div>   

    </div>  
        
        
    )
}

export default StudyCases
