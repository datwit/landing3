import React from 'react'
import {useState} from 'react'
import {AccItemContent} from '../../components/Partner/Faqs/style'
import uuid from 'react-uuid'
import {FooterAccordionTitle, FooterTitleWrapper, FooterAccordionItem, FooterAccItemInner, FooterAccItemLinks, FooterAccordionIcon} from './style';
import { Link } from 'react-router-dom';


const FooterAccItem = ({ title }) => {
    const [opened, setOpened]=useState(false)

    return (
        <FooterAccordionItem       
          className= {opened && 'accordion-item--opened'}
          onClick ={ () => { setOpened( !opened ) }}
        >
        <FooterTitleWrapper>
            <FooterAccordionTitle>{title}</FooterAccordionTitle>          
            <FooterAccordionIcon  className={!opened ? '' : 'icon-rotate' } fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </FooterAccordionIcon>         
        </FooterTitleWrapper>
          <FooterAccItemInner {...{className:'accordion-item__inner'}}>
            <AccItemContent {...{ className: 'accordion-item__content' }}>
               {/*  {
                    items.map(l =>(
                      <a href={l.url} key={uuid()}>
                        <FooterAccItemLinks {...{ className: 'accordion-item__paragraph' }}>
                          {l.title}                            
                        </FooterAccItemLinks>
                      </a>
                    ))                    
                }    */} 
                <a href="/partner">
                    <FooterAccItemLinks {...{ className: 'accordion-item__paragraph' }}>
                      Partner area                           
                    </FooterAccItemLinks>
                </a>
                <a href="/team">
                    <FooterAccItemLinks {...{ className: 'accordion-item__paragraph' }}>
                      Team members area                           
                    </FooterAccItemLinks>
                </a> 
                <a href="/faqs">
                    <FooterAccItemLinks {...{ className: 'accordion-item__paragraph' }}>
                      FAQs                          
                    </FooterAccItemLinks>
                </a>           
            </AccItemContent>
          </FooterAccItemInner>
        </FooterAccordionItem>
    )
}

export default FooterAccItem
