import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import {IconWrapper} from '../../Team/Benefits/style'
import datas from './data.json'
import FindBlock from './FindBlock'
import uuid from 'react-uuid'

const Find = ({classes}) => {
    return (
        <div className={classes}>
            <SectionHeader>Why you should hire us</SectionHeader>
            <SectionSubheader>We can work together to build the product you have in mind through intuitive designs and great tools to back them up.</SectionSubheader>
            <h3 className="text-primary">Our experience creating IT solutions includes:</h3>   
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
