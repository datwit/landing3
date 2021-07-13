import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconWrapper} from './style'
import datas from './data.json'
import BenefitBlock from './BenefitBlock'
import {IconBlock} from '../../Partner/Find/style'
import {HeartSVG} from './HeartSVG'
import {GiveMoneySVG} from './GiveMoneySVG'
import {SignYesSVG} from './SignYesSVG'

const Benefits = ({classes}) => {
    return (
        <div className={classes}>
        <SectionHeader>We are a family</SectionHeader>
        <SectionSubheader>At Datwit we have amazing people and we believe that take care of them is the right thing to do. </SectionSubheader>
            <ContentWrapper>                
                  
                <IconWrapper >  
                    <IconBlock>
                        <HeartSVG />                                         
                        <BenefitBlock title={datas[0].title} description={datas[0].description}/> 
                    </IconBlock>                                                       
                </IconWrapper>
                <IconWrapper >  
                    <IconBlock>
                        <GiveMoneySVG />                                         
                        <BenefitBlock title={datas[1].title} description={datas[1].description}/> 
                    </IconBlock>                                                       
                </IconWrapper>
                <IconWrapper >  
                    <IconBlock>
                        <SignYesSVG />                                         
                        <BenefitBlock title={datas[2].title} description={datas[2].description}/> 
                    </IconBlock>                                                       
                </IconWrapper>                
                                          
            </ContentWrapper>
      </div>
    )
}

export default Benefits
