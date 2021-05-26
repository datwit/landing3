import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconWrapper} from '../../Team/Benefits/style'
import datas from './data.json'
import FindBlock from './FindBlock'
import uuid from 'react-uuid'

const Find = () => {
    return (
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4">
            <SectionHeader>Find the right partnership</SectionHeader>
            <SectionSubheader>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
                <ContentWrapper>
                    {
                        datas.map(data => (
                            <IconWrapper key={uuid()}>                       
                                <FindBlock  src={data.src} title={data.title} description={data.description} />                                             
                            </IconWrapper>
                        ))
                    }                                   
                </ContentWrapper>
        </div>
    )
}

export default Find
