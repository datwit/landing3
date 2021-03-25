import { } from '../../styles/global'
import { SectionHeader, SectionSubheader, ContentWrapper, Button } from '../../styles/global'
import { DHeader } from '../AboutUs/Datwit/style'
import { BlockOuterContainer, BlockBorder, ButtonWrapper } from './style'
import Link from 'next/link' 
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
                <Link href='/partner'>
                    <Button>Confirm your choice
                    <svg className="h-6 w-6 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                    </Button>
                </Link>
            </ButtonWrapper>
            <ButtonWrapper className={card2 ? 'block': 'hidden'}>
                <Link href='/team'>
                    <Button>Confirm your choice
                    <svg className="h-6 w-6 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                    </Button>
                </Link>                
            </ButtonWrapper>
        </div>
    )
}

export default Selection
