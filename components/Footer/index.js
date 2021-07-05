import Link from 'next/link'
import React, {Fragment} from 'react'
import {FooterContainer, SocialList, FooterHeader, FooterLinksWrapper, ColumnContent, ColumnTitle, SocialListItem, SocialListItem2, ContactWrapper, UpperH3, DownH3, CopyRight} from './style'
import datas from './data.json'
import links from './pageslink.json';
import {FiGithub, FiFacebook, FiTwitter, FiLinkedin, FiMessageCircle} from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import FooterAccordion from './FooterAccordion'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Fragment>            
            <FooterContainer>         
                <FooterHeader>Let's work together</FooterHeader> 
                <div className="hidden sm:block">               
                    <FooterLinksWrapper>                    
                        <ColumnContent>
                            <ColumnTitle>FOLLOW US</ColumnTitle>
                            <SocialList>
                                <Link href={datas[0].url}><SocialListItem><FiLinkedin /></SocialListItem></Link>
                                <Link  href={datas[1].url}><SocialListItem><FiFacebook /></SocialListItem></Link>
                                <Link  href={datas[2].url}><SocialListItem><FiGithub /></SocialListItem></Link>
                                <Link  href={datas[3].url}><SocialListItem><FiTwitter /></SocialListItem></Link>                           
                            </SocialList>                            
                        </ColumnContent>                                  
                        <ColumnContent>
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
                        </ColumnContent> 
                        {
                            React.Children.toArray(
                                links.map(llink => (
                                <ColumnContent>
                                    <ColumnTitle>{llink.title}</ColumnTitle>
                                    {
                                        React.Children.toArray(
                                            llink.items.map(l =>(
                                            <Link href={l.url}><UpperH3>{l.title}</UpperH3></Link>
                                            ))
                                        )                                        
                                    }
                                </ColumnContent>
                                ))
                            )                            
                        }
                    </FooterLinksWrapper>  
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
                                    <li><HiOutlineMail className="h-7 w-7 text-white mr-2"/></li>                                                 
                                </Link>
                                <Link href="tel:+58 658 987">
                                    <li><FiMessageCircle className="h-7 w-7 text-white mr-2" /></li>
                                </Link>     
                            </SocialList>                          
                        </ColumnContent> 
                        {/*accordion*/}
                            {
                                React.Children.toArray(
                                    links.map(lik=>(                                    
                                        <FooterAccordion {...lik} />                                    
                                    ))
                                )                                
                            }
                    </FooterLinksWrapper>
                </div>                   
            </FooterContainer>                
            <CopyRight>&copy; {year} DatWit</CopyRight>
        </Fragment>
    )
}

export default Footer
