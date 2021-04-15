import Link from 'next/link'
import {Fragment} from 'react'
import {FooterContainer, SocialList, FooterHeader, FooterLinksWrapper, ColumnContent, ColumnTitle, SocialListItem, ContactWrapper, UpperH3, DownH3, CopyRight} from './style'
import datas from './data.json'
import {FiGithub, FiFacebook, FiTwitter, FiLinkedin} from 'react-icons/fi'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Fragment>            
            <FooterContainer>                                    
                   {/*  <img className="mx-auto mb-6" src="/images/logo-grande.png" alt="logo" width="350px" /> */}
                    <FooterHeader>Let's work together</FooterHeader>                
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
                    <ColumnContent>
                        <ColumnTitle>SPECIALIZED CONTENT</ColumnTitle>                        
                        <Link href='/partner'><UpperH3>Partner area</UpperH3></Link>
                        <Link href='/team'><DownH3>Team member area</DownH3></Link>                        
                    </ColumnContent>                
                    <ColumnContent>
                        <ColumnTitle>DATA PROTECTION</ColumnTitle>
                        <Link href='/info/policy'><h3 className="text-white text-left mb-5 cursor-pointer">Privacy Policy</h3></Link>
                        <Link href='/info/terms'><h3 className="text-white text-left cursor-pointer" >Terms and Conditions</h3></Link>
                        {/*<UpperH3>Privacy Policy</UpperH3>
                        <DownH3>Terms and Conditions</DownH3>*/}
                    </ColumnContent>
                </FooterLinksWrapper>                    
            </FooterContainer>                
            <CopyRight>&copy; {year} DatWit</CopyRight>
        </Fragment>
    )
}

export default Footer
