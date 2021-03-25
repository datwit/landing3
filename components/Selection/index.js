import { } from '../../styles/global'
import { SectionHeader, SectionSubheader, ContentWrapper } from '../../styles/global'
import { DHeader } from '../AboutUs/Datwit/style'
import { BlockOuterContainer, BlockBorder, ButtonWrapper } from './style'
import CTA from '../Home/CTA'
import { useState } from 'react'


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
        <div className="container px-5 mx-auto">
            <SectionHeader>Sit ea irure veniam voluptate id incididunt ...</SectionHeader>
            <SectionSubheader>Sit ea irure veniam voluptate id incididunt consectetur amet. Pariatur proident duis exercitation consequat ipsum velit anim dolor fugiat esse ea.</SectionSubheader>
            <ContentWrapper>
                <>
                    <BlockOuterContainer>
                        <BlockBorder onClick={handleToggle1} className={card1 ? 'active' : ''}>
                            <img src="" alt="img" className="md:h-60 h-40" />
                            <DHeader>Partner</DHeader>
                        </BlockBorder>
                    </BlockOuterContainer>
                    <BlockOuterContainer>
                        <BlockBorder onClick={handleToggle2} className={card2 ? 'active' : ''}>
                            <img src="" alt="img" className="md:h-60 h-40" />
                            <DHeader>Team</DHeader>
                        </BlockBorder>
                    </BlockOuterContainer>
                </>
            </ContentWrapper>                       
            <ButtonWrapper className={card1 ? 'block': 'hidden'}>
                <CTA buttonName={'Confirm your choice'} hRef='/partner' />
            </ButtonWrapper>
            <ButtonWrapper className={card2 ? 'block': 'hidden'}>
                <CTA buttonName={'Confirm your choice'} hRef='/team' />
            </ButtonWrapper>
        </div>
    )
}

export default Selection
