import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconWrapper} from '../../Team/Benefits/style'
import { IconBlock} from './style'
import datas from './data.json'
import FindBlock from './FindBlock'
import uuid from 'react-uuid'
import { CustomSVG } from './CustomSVG'
import {IntegrationSVG} from './IntegrationSVG'
import {AgileSVG} from './AgileSVG'

const Find = ({classes}) => {
    return (
        <div className={classes}>
            <SectionHeader>Why you should hire us</SectionHeader>
            <SectionSubheader>We can work together to build the product you have in mind through intuitive designs and great tools to back them up.</SectionSubheader>
            <h3 className="text-gray-600">Our experience creating IT solutions includes:</h3>   
                <ContentWrapper>                       
                    <IconWrapper>                      
                        <IconBlock>
                            <CustomSVG />
                            <FindBlock title={datas[0].title} description={datas[0].description}/>
                        </IconBlock>                                               
                    </IconWrapper>
                    <IconWrapper>                      
                        <IconBlock>                           
                            <IntegrationSVG />
                            <FindBlock title={datas[1].title} description={datas[1].description} />
                        </IconBlock>                                               
                    </IconWrapper>
                    <IconWrapper>                      
                        <IconBlock>                           
                            <AgileSVG />
                            <FindBlock title={datas[2].title} description={datas[2].description} />
                        </IconBlock>                                               
                    </IconWrapper>
                      
                                                      
                </ContentWrapper>
        </div>
    )
}

export default Find
