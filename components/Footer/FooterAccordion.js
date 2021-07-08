import {useState} from 'react'
import {AccItemContent, AccItemParagraph, AccordionTitle, AccItem, AccordionTitleWrapper, AccordionIcon, AccItemInner} from 'components/Partner/Faqs/style'
import uuid from 'react-uuid'
import Link from 'next/link'
import {AccordionSection, Accordion, AccordionFooterTitle,AccordionContent, AccordionTitleWrapperF, AccordionIconFooter, AccContWrapper} from './style'

const FooterAccordion = ({ title, items }) => {

    const [opened, setOpened]=useState(false)
    
    return (
      <>        
          <AccItem className= {opened && 'accordion-item--opened'}>
              <AccordionTitleWrapperF onClick ={ () => { setOpened( !opened ) }}>
                  <AccordionFooterTitle>{title}</AccordionFooterTitle>          
                  <AccordionIconFooter className={!opened ? '' : 'icon-rotate' } fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </AccordionIconFooter>         
              </AccordionTitleWrapperF>
              <AccContWrapper {...{className:'accordion-item__inner'}}>
                <AccordionContent {...{ className: 'accordion-item__content' }}>
                <ul className="my-2">
                  {
                      items.map(l =>(
                        <li className="list-none" key={uuid()}>
                          <Link href={l.url}>{l.title}</Link>
                        </li>                                                
                      ))                    
                  }
                </ul> 
                </AccordionContent>
              </AccContWrapper>
          </AccItem>
      </>    
    )
}

export default FooterAccordion 