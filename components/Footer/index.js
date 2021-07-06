import Link from 'next/link'
import React, {Fragment} from 'react'
import {FooterContainer, SocialList, FooterHeader, FooterLinksWrapper, ColumnContent,ColumnContent2, ColumnTitle, SocialListItem, SocialListItem2, ContactWrapper, UpperH3, DownH3, CopyRight} from './style'
import datas from './data.json'
import links from './pageslink.json';
import {FiGithub, FiFacebook, FiTwitter, FiLinkedin, FiMessageCircle} from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import FooterAccordion from './FooterAccordion'
import {QuestionText, AccordionList, AccordionWrapper} from 'components/Partner/Faqs/style'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Fragment>            
            <FooterContainer>         
                <FooterHeader>Let's work together</FooterHeader> 
                <div className="hidden sm:block">               
                   <div className="sm:flex">
                        <div className="sm:w-2/4 lg:flex lg:w-2/3">
                            <div className="w-2/4">
                                <ColumnTitle>FOLLOW US</ColumnTitle>
                                <SocialList>
                                    <Link href={datas[0].url}><SocialListItem><FiLinkedin /></SocialListItem></Link>
                                    <Link  href={datas[1].url}><SocialListItem><FiFacebook /></SocialListItem></Link>
                                    <Link  href={datas[2].url}><SocialListItem><FiGithub /></SocialListItem></Link>
                                    <Link  href={datas[3].url}><SocialListItem><FiTwitter /></SocialListItem></Link>                           
                                </SocialList>                            
                            </div>                                  
                            <div className="w-2/4">
                                <ColumnTitle>CONTACT US</ColumnTitle>
                                <ContactWrapper>                                
                                    <Link href="mailto:contact@datwit.com">
                                        <SocialListItem2>
                                            <HiOutlineMail />
                                            <UpperH3>contact@datwit.com</UpperH3>
                                        </SocialListItem2>                               
                                    </Link>
                                </ContactWrapper>
                                <ContactWrapper>
                                    <Link href="tel:+58 658 987">
                                        <SocialListItem2>
                                            <FiMessageCircle />
                                            <UpperH3>+58 658 987</UpperH3>
                                        </SocialListItem2>
                                    </Link>                                
                                </ContactWrapper>                            
                            </div>
                        </div>                    
                        <div className="sm:w-2/4 lg:w-1/3">
                            <AccordionList>
                            {
                                React.Children.toArray(
                                    links.map(lik=>(                                    
                                        <li {...{ className: 'accordion-list__item' }}>
                                            <FooterAccordion {...lik} />
                                        </li>                                  
                                    ))
                                )                                
                            }                           
                            </AccordionList>
                        </div>                           
                    </div>                        
                </div>              
                <div className="sm:hidden">
                    <FooterLinksWrapper>                    
                        <ColumnContent>
                            <ColumnTitle>CONTACT US</ColumnTitle>
                            <SocialList>
                                <Link href={datas[0].url}><SocialListItem><FiLinkedin /></SocialListItem></Link>
                                <Link  href={datas[1].url}><SocialListItem><FiFacebook /></SocialListItem></Link>
                                <Link  href={datas[2].url}><SocialListItem><FiGithub /></SocialListItem></Link>
                                <Link  href={datas[3].url}><SocialListItem><FiTwitter /></SocialListItem></Link>                                  
                                <Link href="mailto:contact@datwit.com">
                                    <li className="mr-2 mt-2"><HiOutlineMail className="h-7 w-7 text-white mr-2"/></li>                                                 
                                </Link>
                                <Link href="tel:+58 658 987">
                                    <li className="mr-2 mt-2"><FiMessageCircle className="h-7 w-7 text-white mr-2" /></li>
                                </Link>     
                            </SocialList>                          
                        </ColumnContent> 
                        {/*accordion*/}
                            <AccordionList>
                            {
                                React.Children.toArray(
                                    links.map(lik=>(                                    
                                        <li {...{ className: 'accordion-list__item' }}>
                                            <FooterAccordion {...lik} />
                                        </li>                                  
                                    ))
                                )                                
                            }                         
                            </AccordionList>
                    </FooterLinksWrapper>
                </div>                   
            </FooterContainer>                
            <CopyRight>&copy; {year} DatWit</CopyRight>
        </Fragment>
    )
}

export default Footer
