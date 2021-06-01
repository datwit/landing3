import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconWrapper} from './style'
import datas from './data.json'
import BenefitBlock from './BenefitBlock'
import uuid from 'react-uuid'

const Benefits = ({classes}) => {
    return (
        <div className={classes}>
        <SectionHeader>We take care of our people</SectionHeader>
        <SectionSubheader>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
            <ContentWrapper>
                {
                    datas.map(data => (
                    <IconWrapper key={uuid()}>                    
                         <BenefitBlock src={data.src} title={data.title} description={data.description}/>                                                     
                    </IconWrapper>
                    ))
                }                          
            </ContentWrapper>
      </div>
    )
}

export default Benefits
