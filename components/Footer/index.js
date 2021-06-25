import Link from 'next/link'
import {Fragment} from 'react'
import {Divider, FooterAccordionList, FooterContainer, SocialList, FooterHeader, FooterLinksWrapper, ColumnContent, ColumnTitle, SocialListItem, ContactWrapper, UpperH3, DownH3, CopyRight, FooterAccordionWrapper} from './style'
import datas from './data.json'
import links from './pageslink.json';
import {FiGithub, FiFacebook, FiTwitter, FiLinkedin} from 'react-icons/fi'
import FooterAccItem from './FooterAccItem';
import uuid from 'react-uuid'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Fragment>            
            <FooterContainer>                                    
                   {/*  <img className="mx-auto mb-6" src="/images/logo-grande.png" alt="logo" width="350px" /> */}
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
                                <svg className="h-7 w-7 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
                                <a href="mailto:contact@datwit.com">
                                <UpperH3>contact@datwit.com</UpperH3>
                                </a>
                            </ContactWrapper>
                            <ContactWrapper>
                                <svg className="h-7 w-7 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                <DownH3>+58 658 987</DownH3>
                            </ContactWrapper>                            
                        </ColumnContent> 
                        {
                            links.map(llink => (
                                <ColumnContent key={uuid()}>
                                    <ColumnTitle>{llink.title}</ColumnTitle>
                                    {
                                        llink.items.map(l =>(
                                            <Link href={l.url} key={uuid()}><UpperH3>{l.title}</UpperH3></Link>
                                        ))
                                    }
                                </ColumnContent>
                            ))
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
                                <Link href="mailto:contact@datwit.com"><svg className="h-7 w-7 text-white mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg></Link> 
                                <Link href="tel:+58 658 987"><svg className="h-7 w-7 text-white mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></Link>                       
                            </SocialList>
                            {/* <Divider />   */}
                        </ColumnContent>                        
                       {/*  <FooterAccordionWrapper>
                            <FooterAccordionList>
                            {
                                links.map((lik, key)=> {
                                return (
                                <li {...{ className: 'accordion-list__item', key }}>
                                    <FooterAccItem {...lik} />
                                </li>
                                )
                            })
                            }                                
                            </FooterAccordionList>
                        </FooterAccordionWrapper>  */}  
                        <ColumnContent>
                            <ColumnTitle>SPECIALIZED CONTENT</ColumnTitle>
                            <Link href="/partner"><UpperH3>Partner area</UpperH3></Link>

                        </ColumnContent>              
                    </FooterLinksWrapper>
                </div>                   
            </FooterContainer>                
            <CopyRight>&copy; {year} DatWit</CopyRight>
        </Fragment>
    )
}

export default Footer
