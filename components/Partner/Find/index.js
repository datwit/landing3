import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconBlock, IconContent, IconTitle, IconText} from './style'
import {SCardWrapper} from '../../Home/StudyCases/style'
import datas from './data.json'

const Find = () => {
    return (
        <div className="container px-5 mx-auto">
            <SectionHeader>Find the right partnership</SectionHeader>
            <SectionSubheader>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
                <ContentWrapper>
                    {
                        datas.map((data,key)=>(
                            <SCardWrapper key={key}>                       
                                <IconBlock>
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center px-8" src="" alt="img" />
                                    <IconContent>
                                        <IconTitle>Lorem ipsum dolor si amet</IconTitle>
                                        <IconText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam consequuntur facilis</IconText>
                                    </IconContent>
                                </IconBlock>                                              
                            </SCardWrapper>

                        ))
                    }                                   
                </ContentWrapper>
        </div>
    )
}

export default Find
