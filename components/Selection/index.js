import { SectionHeader, SectionSubheader, ContentWrapper} from 'styles/global'
import { BlockOuterContainer, BlockBorder, ButtonWrapper, SHeader, SVGWrapper } from './style'
import { useState} from 'react'
import {SelectionButton} from './SelectionButton'
import {PartnerSVG} from './PartnerSVG'
import {TeamSVG} from './TeamSVG'


const Selection = ({classes}) => {

    const [card1, isCard1] = useState(false)
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
        <div className={classes}>
            <SectionHeader>Join us...</SectionHeader>
            <SectionSubheader>Stop being who you were and discover who you really are as a part of our family. Select wich member do you want to be. </SectionSubheader>
            <ContentWrapper>
                <>
                    <BlockOuterContainer>
                        <BlockBorder onClick={handleToggle1} className={`${card1 ? 'active' : ''}`}>                            
                            <SVGWrapper>
                                <PartnerSVG />
                                <svg className={`${card1 ? 'fadeIn' : ''} checkmark absolute top-0 right-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                            </SVGWrapper>                            
                            <SHeader>Partner</SHeader>
                        </BlockBorder>
                    </BlockOuterContainer>
                    <BlockOuterContainer>
                        <BlockBorder onClick={handleToggle2} className={`${card2 ? 'active' : ''}`}> 
                            <SVGWrapper>                      
                                <TeamSVG />
                                <svg className={`${card2 ? 'fadeIn' : ''} checkmark absolute top-0 -right-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                            </SVGWrapper> 
                            <SHeader>Team</SHeader>
                        </BlockBorder>
                    </BlockOuterContainer>
                </>
            </ContentWrapper>                                           
            <ButtonWrapper className={card1 || card2 ? 'visible': 'invisible'}>                
                <SelectionButton hhref={card1 ? "/partner" : "/team"}/>                
            </ButtonWrapper>   
        </div>
    )
}

export {Selection}
