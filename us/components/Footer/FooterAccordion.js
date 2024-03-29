import React, {useState} from 'react'
import { AccItem} from 'components/Partner/Faqs/style'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {AccordionFooterTitle,AccordionContent, AccordionTitleWrapperF, AccordionIconFooter, AccContWrapper} from './style'

const FooterAccordion = ({ title, items }) => {

	  const router = useRouter();
    const [opened, setOpened]=useState(false)

    return (
      <>
          <AccItem className= {opened && 'accordion-item--opened'}>
              <AccordionTitleWrapperF onClick ={ () => { setOpened( !opened ) }}>
                  <AccordionFooterTitle>{title}</AccordionFooterTitle>
                  <AccordionIconFooter className={!opened ? '' : 'icon-rotate' } 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </AccordionIconFooter>
              </AccordionTitleWrapperF>
              <AccContWrapper {...{className:'accordion-item__inner'}}>
                <AccordionContent {...{ className: 'accordion-item__content' }}>
                <ul className="my-2">
                  {
                      React.Children.toArray(
                          items.map(l =>(
                              <li className="list-none">
                                {router.pathname != l.url && <Link href={l.url}>{l.title}</Link>}
                              </li>
                          ))
                      )
                  }
                </ul>
                </AccordionContent>
              </AccContWrapper>
          </AccItem>
      </>
    )
}

export {FooterAccordion}