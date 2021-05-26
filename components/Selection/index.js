import { } from '../../styles/global'
import { SectionHeader, SectionSubheader, ContentWrapper} from '../../styles/global'
import { BlockOuterContainer, BlockBorder, ButtonWrapper, SHeader } from './style'
import { useState } from 'react'
import SelectionButton from './SelectionButton';


const Selection = () => {

    const [card1, isCard1] = useState(false);
    const [card2, isCard2] = useState(false)
    const [init, setInit] = useState(true)

    const handleToggle1 = () => {
        if (init) {
            isCard1(true)
            setInit(false)
        } else {
            isCard1(card1 => !card1);
            isCard2(false);
        }
    };
    const handleToggle2 = () => {
        if (init) {
            isCard2(true)
            setInit(false)
        } else {
            isCard1(false);
            isCard2(card2 => !card2);
        }
    };
 
    return (
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4">
            <SectionHeader>Sit ea irure veniam voluptate id incididunt ...</SectionHeader>
            <SectionSubheader>Sit ea irure veniam voluptate id incididunt consectetur amet. Pariatur proident duis exercitation consequat ipsum velit anim dolor fugiat esse ea.</SectionSubheader>
            <ContentWrapper>
                <>
                    <BlockOuterContainer>
                        <BlockBorder onClick={handleToggle1} className={`${card1 ? 'active' : ''} md:ml-16`}>
                            <img src="" alt="img" className="h-28 sm:h-40 md:h-60" />
                            <SHeader>Partner</SHeader>
                        </BlockBorder>
                    </BlockOuterContainer>
                    <BlockOuterContainer>
                        <BlockBorder onClick={handleToggle2} className={`${card2 ? 'active' : ''} md:mr-16`}>
                            <img src="" alt="img" className="h-28 sm:h-40 md:h-60" />
                            <SHeader>Team</SHeader>
                        </BlockBorder>
                    </BlockOuterContainer>
                </>
            </ContentWrapper>                       
            <ButtonWrapper className={card1 ? 'block': 'hidden'}>                
                <SelectionButton hhref="/partner"/>
            </ButtonWrapper>
            <ButtonWrapper className={card2 ? 'block': 'hidden'}>            
                <SelectionButton hhref="/team"/>
            </ButtonWrapper>
        </div>
    )
}

export default Selection
