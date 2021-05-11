import {useState} from 'react'
import {AccItemContent, AccItemParagraph, AccordionTitle, AccItem, AccordionTitleWrapper, AccordionIcon, AccItemInner} from '../../../components/Partner/Faqs/style'

const AccordionItem = ({ question, answer}) => {

    const [opened, setOpened]=useState(false)
    
    return (
        <AccItem        
          className= {opened && 'accordion-item--opened'}
          onClick ={ () => { setOpened( !opened ) }}
        >
        <AccordionTitleWrapper>
            <AccordionTitle>{question}</AccordionTitle>          
            <AccordionIcon  className={!opened ? '' : 'icon-rotate' } fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </AccordionIcon>         
        </AccordionTitleWrapper>
          <AccItemInner {...{className:'accordion-item__inner'}}>
            <AccItemContent {...{ className: 'accordion-item__content' }}>
              <AccItemParagraph {...{ className: 'accordion-item__paragraph' }}>
                {answer}
              </AccItemParagraph>
            </AccItemContent>
          </AccItemInner>
      </AccItem>
    )
}

export default AccordionItem
