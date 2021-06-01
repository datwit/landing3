import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconWrapper} from '../../Team/Benefits/style'
import datas from './data.json'
import FindBlock from './FindBlock'
import uuid from 'react-uuid'

const Find = ({classes}) => {
    return (
        <div className={classes}>
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
