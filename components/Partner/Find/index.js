import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconBlock, IconContent, IconTitle, IconText} from './style'
import {IconWrapper} from '../../Team/Benefits/style'
import datas from './data.json'

const Find = () => {
    return (
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4">
            <SectionHeader>Find the right partnership</SectionHeader>
            <SectionSubheader>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
                <ContentWrapper>
                    {
                        datas.map((data,key)=>(
                            <IconWrapper key={key}>                       
                                <IconBlock>
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center px-8" src={data.src} alt="img" />
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

export default Find
