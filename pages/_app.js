import '../styles/tailwind.css' 
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import React,{useEffect} from 'react'
import CookieConsent from 'react-cookie-consent';
import Link from 'next/dist/client/link';

function MyApp({ Component, pageProps }) {

    const handleAcceptCookie = () => {
      TagManager.initialize({ gtmId: 'GTM-MJQVFNP' });
    }
       
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    return (
      <>
        <CookieConsent
          onAccept={handleAcceptCookie}
          debug={false}
          location="bottom"
          containerClasses="cookies-consent"
          >
          Our site uses cookies to improve your experience and enable certain functionality. By continuing you agree to our use of cookies.     
          <Link href="/info/policy/" className="links-cookies-consent"> Privacy Policy</Link>
        </CookieConsent>
        <Component {...pageProps} />
      </>
    )
}

export default MyApp
