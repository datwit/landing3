import {} from '../../styles/global'
import {SectionHeader, SectionSubheader, ContentWrapper} from '../../styles/global'
import {DHeader} from '../AboutUs/Datwit/style'
import {BlockOuterContainer, BlockBorder} from './style'


const Selection = () => {
    return (
        <div className="container px-5 mx-auto">
            <SectionHeader>Sit ea irure veniam voluptate id incididunt ...</SectionHeader>
            <SectionSubheader>Sit ea irure veniam voluptate id incididunt consectetur amet. Pariatur proident duis exercitation consequat ipsum velit anim dolor fugiat esse ea.</SectionSubheader>
            <ContentWrapper>
                <>
                    <BlockOuterContainer>
                        <BlockBorder>
                            <img src="" alt="img" className="md:h-60 h-40"/>
                            <DHeader>Partner</DHeader>
                        </BlockBorder>
                    </BlockOuterContainer>
                    <BlockOuterContainer>
                        <BlockBorder>
                            <img src="" alt="img" className="md:h-60 h-40"/>
                            <DHeader>Team</DHeader>
                        </BlockBorder>
                    </BlockOuterContainer>
                </>    
            </ContentWrapper>            
        </div>
    )
}

export default Selection
