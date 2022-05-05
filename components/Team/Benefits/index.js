import {ContentWrapper, SectionHeader, SectionSubheader} from 'styles/global'
import datas from './data.json'
import {BenefitBlock }from './BenefitBlock'
import {HeartSVG} from './HeartSVG'
import {GiveMoneySVG} from './GiveMoneySVG'
import {SignYesSVG} from './SignYesSVG'

const Benefits = ({classes}) => {
    return (
        <div className={classes}>
            <SectionHeader>We are a family</SectionHeader>
            <SectionSubheader>Our Datwit team has amazing people. We believe their well-being is essential. </SectionSubheader>
            <ContentWrapper>
                <BenefitBlock title={datas[0].title} description={datas[0].description}>
                    <HeartSVG />
                </BenefitBlock>
                <BenefitBlock title={datas[1].title} description={datas[1].description}>
                    <GiveMoneySVG />
                </BenefitBlock>
                <BenefitBlock title={datas[2].title} description={datas[2].description}>
                    <SignYesSVG />
                </BenefitBlock>
            </ContentWrapper>
        </div>
    )
}

export {Benefits}
