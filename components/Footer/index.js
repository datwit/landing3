import Link from 'next/link'
import React from 'react'
import {FooterContainer, ContactContainer, SocialList, FooterHeader, FooterLinksWrapper,FooterAccordionContainer, ColumnContent, ColumnTitle, SocialListItem, SocialListItem2, ContactWrapper,CopyRight} from './style'
import datas from './data.json'
import links from './pageslink.json';
import {FiGithub, FiFacebook, FiTwitter, FiLinkedin, FiMessageCircle} from 'react-icons/fi'
import {SiWhatsapp} from "react-icons/si"
import { HiOutlineMail } from 'react-icons/hi'
import {FooterAccordion} from './FooterAccordion'
import { AccordionList } from 'components/Partner/Faqs/style'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <FooterContainer>
                <FooterHeader>Let's work together</FooterHeader>
                <div className="hidden sm:block">
                   <div className="sm:flex">
                        <ContactContainer>
                            <div className="w-2/4">
                                <ColumnTitle>FOLLOW US</ColumnTitle>
                                <SocialList>
                                    <Link href={datas[0].url}><SocialListItem2><FiLinkedin /></SocialListItem2></Link>
                                    {/* <Link  href={datas[1].url}><SocialListItem2><FiFacebook /></SocialListItem2></Link> */}
                                    <Link  href={datas[2].url}><SocialListItem2><FiGithub /></SocialListItem2></Link>
                                    <Link  href={datas[3].url}><SocialListItem2><FiTwitter /></SocialListItem2></Link>
                                </SocialList>
                            </div>
                            <div className="w-2/4">
                                <ColumnTitle>CONTACT US</ColumnTitle>
                                <ContactWrapper>
                                    <Link href="mailto:contact@datwit.com">
                                        <SocialListItem2>
                                            <HiOutlineMail />                                           
                                        </SocialListItem2>
                                    </Link>
                                    <Link href="//wa.me/+381613141890">
                                        <SocialListItem2>
                                            <SiWhatsapp />                                           
                                        </SocialListItem2>
                                    </Link>
                                </ContactWrapper>
                            </div>
                        </ContactContainer>
                        <FooterAccordionContainer>
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
                        </FooterAccordionContainer>
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
                                    <SocialListItem><HiOutlineMail/></SocialListItem>
                                </Link>
                                <Link href="tel:+58 658 987">
                                    <SocialListItem><FiMessageCircle /></SocialListItem>
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
            <CopyRight>&copy; {year} Datwit</CopyRight>
        </>
    )
}

export {Footer}
