import React,{useState} from 'react'
import {AccItemContent, AccItemParagraph, AccordionTitle, AccItem, AccordionTitleWrapper, AccordionIcon, AccItemInner} from '../../../components/Partner/Faqs/style'

const AccordionItem = ({ question, answer, clases, link, list}) => {

    const [opened, setOpened]=useState(false)

    return (
        <AccItem className= {opened && 'accordion-item--opened'}>
            <AccordionTitleWrapper onClick ={ () => { setOpened( !opened ) }}>
                <AccordionTitle>{question}</AccordionTitle>
                <AccordionIcon  className={!opened ? '' : 'icon-rotate' }>
                  <svg width="20" height="20"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </AccordionIcon>
            </AccordionTitleWrapper>
            <AccItemInner {...{className:'accordion-item__inner'}}>
              <AccItemContent {...{ className: 'accordion-item__content' }}>
                <AccItemParagraph {...{ className: 'accordion-item__paragraph' }}>
                  <span className="text-base text-gray-600">{answer}</span>
                  <span><a className={clases} href={link}> here</a></span>
                  <ul>
                  {
                    React.Children.toArray(
                      list.map(d=>(
                        <li className="text-base text-gray-600 list-disc ml-4">{d.title}</li>
                        ))
                      )
                  }
                  </ul>
                </AccItemParagraph>
              </AccItemContent>
            </AccItemInner>
        </AccItem>
    )
}

export default AccordionItem
