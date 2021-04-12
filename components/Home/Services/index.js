import datas from "./data.json";
import {useState} from 'react'
import {ContentWrapper, SectionSubheader}from '../../../styles/global';
import {IconWrapper, IconListWrapper, IconListItem, IconTitle, TabContent, TabContentInner, BulletTitle, BulletSubtitle, ServiceBulletsOuter, ServiceBulletsSpan} from './styles';


const Services = () => {
    
    const [tab1, isTabOne] = useState(true);
	const [tab2, isTabTwo] = useState(false)

    const handleClick1 = () => {
		isTabOne(tab1=>!tab1);
		isTabTwo(tab2=>!tab2);
	};	
    const handleClick2 = () => {
		isTabOne(tab1=>!tab1);
		isTabTwo(tab2=>!tab2);
    };    
   
    return (
        <div className="container px-5 mx-auto">
            <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SectionSubheader>
            <ContentWrapper>
                <IconWrapper>
                    <IconListWrapper>
                        <IconListItem>
                            <svg className={`${tab1 ? 'text-secondary2':'text-primary'} h-8 w-8`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6" />  <polyline points="8 6 2 12 8 18" />
                            </svg>
                        <IconTitle className={tab1 ? 'text-secondary2':'text-primary'} onClick = {handleClick1}>
                            Software
                            <br />
                            Development
                        </IconTitle>
                        </IconListItem>
                        <IconListItem>
                            <svg className={`${tab2 ? 'text-secondary2':'text-primary'} h-8 w-8`}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                            <path stroke="none" d="M0 0h24v24H0z"/>
                                <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                                <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                            </svg>
                        <IconTitle  className={tab2 ? 'text-secondary2':'text-primary'} onClick = {handleClick2}>
                            Data
                            <br />
                            Science
                        </IconTitle>
                        </IconListItem>
                    </IconListWrapper>
                </IconWrapper>
                <TabContent>
                    <TabContentInner>                       
                            <div className={tab1 ? 'block' : 'hidden'}>
                            {
                                datas.soft.map((data, key) => (
                                    <div key={key}>
                                        <BulletTitle>{data.title}</BulletTitle>
                                        <BulletSubtitle>{data.subtitle}</BulletSubtitle>
                                    {
                                      data.items.map((data,key1)=>(
                                        <div  key={key1}> 
                                            <ServiceBulletsOuter>
                                                <ServiceBulletsSpan>
                                                <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                                </ServiceBulletsSpan>{data.tit}
                                            </ServiceBulletsOuter>
                                        </div>
                                      ))
                                    }
                                    </div>
                                ))
                            }
                                
                            </div>
                            <div className={tab2 ? 'block' : 'hidden'}>
                            {
                                datas.data.map((data, key) => (
                                    <div  key={key}>
                                    <BulletTitle>{data.title}</BulletTitle>
                                    <BulletSubtitle>{data.subtitle}</BulletSubtitle>
                                    {
                                      data.items.map((data,key1)=>(
                                        <div  key={key1}>
                                            <ServiceBulletsOuter>
                                                <ServiceBulletsSpan>
                                                <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                                </ServiceBulletsSpan>{data.tit}
                                            </ServiceBulletsOuter>
                                        </div>  
                                      ))
                                    }
                                    </div>
                                ))
                            }
                            </div>                       
                    </TabContentInner>
                </TabContent>
            </ContentWrapper>
        </div>       
        
    )
}

export default Services
