import datas from "./data.json";
import {ContentWrapper, SectionHeader}from '../../../styles/global';
import { IllWrapper2, BulletSubtitle, ServiceBulletsOuter, ServiceBulletsSpan} from './styles';
import DataAnalySVG from './DataAnalySVG'
import uuid from 'react-uuid'
import { ImageTitle, TextBlock} from '../Services2/style'


const Services1 = ({classes}) => {
    
    return (        
        <div className={classes}>
            <SectionHeader>We do Data Intelligence</SectionHeader>
                <ContentWrapper>
                    <IllWrapper2>
                        <DataAnalySVG/> 
                        <ImageTitle>{datas[1].title}</ImageTitle>
                    </IllWrapper2>
                    <TextBlock>                       
                        <div className="ml-2">                                    
                            <BulletSubtitle>{datas[1].subtitle}</BulletSubtitle>
                        {
                            datas[1].items.map(data=>(
                            <div  key={uuid()}> 
                                <ServiceBulletsOuter>
                                    <ServiceBulletsSpan>
                                    <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                    </ServiceBulletsSpan>{data.tit}
                                </ServiceBulletsOuter>
                            </div>
                            ))
                        }
                        </div>                           
                    </TextBlock>                                   
                </ContentWrapper>               
        </div>             
        
    )
   
}

export default Services1
