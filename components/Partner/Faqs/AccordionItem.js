import {useState} from 'react'
import {QuestionText, AccordionList, AccordionWrapper, AccItem, AccordionTitleWrapper, AccordionIcon, AccItemInner} from '../../../components/Partner/Faqs/style'

const AccordionItem = ({ question, answer}) => {

    const [opened, setOpened]=useState(false)
    
    return (
        <AccItem        
          className= {opened && 'accordion-item--opened'}
          onClick ={ () => { setOpened( !opened ) }}
        >
        <AccordionTitleWrapper>
            <h3 {...{ className: 'accordion-item__title' }}>
            {question}
            </h3>          
            <AccordionIcon  className={!opened ? 'icon-rotate' : '' } fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </AccordionIcon>         
        </AccordionTitleWrapper>
          <div {...{className:'accordion-item__inner'}}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {answer}
              </p>
            </div>
          </div>
      </AccItem>
    )
}

export default AccordionItem
