import Link from 'next/link'
import {Fragment} from 'react'
import {FooterContainer, SocialList, FooterHeader, FooterLinksWrapper, ColumnContent, ColumnTitle, SocialListItem, ContactWrapper, UpperH3, DownH3, CopyRight} from './style'


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Fragment>            
            <FooterContainer>                                    
                    <img className="mx-auto mb-6" src="/images/logo-grande.png" alt="logo" width="350px" />
                    <FooterHeader>Let's work together</FooterHeader>                
                <FooterLinksWrapper>        
                    <ColumnContent>
                        <ColumnTitle>FOLLOW US</ColumnTitle>
                        <SocialList>
                            <SocialListItem>
                                <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                            </SocialListItem>
                            <SocialListItem>
                                <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </SocialListItem>
                            <SocialListItem>
                                <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                            </SocialListItem>
                            <SocialListItem>
                                <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                            </SocialListItem>
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
