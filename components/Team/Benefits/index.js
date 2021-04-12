import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconWrapper} from './style'
import {IconBlock, IconContent, IconTitle, IconText} from '../../Partner/Find/style'
import datas from './data.json'

const Benefits = () => {
    return (
        <div className="container px-5 mx>-auto">
        <SectionHeader>We take care of our people</SectionHeader>
        <SectionSubheader>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
            <ContentWrapper>
                {
                    datas.map((data,key)=>(
                    <IconWrapper key={key}>                    
                        <IconBlock>
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center px-8" src={data.src} alt="image"/>
                        <IconContent>
                            <IconTitle>{data.title}</IconTitle>
                            <IconText>{data.description}</IconText>
                        </IconContent>
                        </IconBlock>                                                        
                    </IconWrapper>
                    ))
                }                          
            </ContentWrapper>
      </div>
    )
}

export default Benefits
