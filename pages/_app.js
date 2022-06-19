import '../styles/tailwind.css' 
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import React,{useEffect} from 'react'
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';
import Link from 'next/dist/client/link';

function MyApp({ Component, pageProps }) {

    const handleAcceptCookie = () => {
      TagManager.initialize({ gtmId: 'GTM-MJQVFNP' });
    }

    const handleDeclineCookie = () => {
      //remove google analytics cookies
      Cookies.remove("_ga");
      Cookies.remove("_gat");
      Cookies.remove("_gid");
    };

    useEffect(() => {
      const isConsent = getCookieConsentValue();
      if (isConsent === "true") {
        handleAcceptCookie();
      }
    }, []);
       
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    return (
      <>
        <CookieConsent
          onAccept={handleAcceptCookie}
          enableDeclineButton={true}
          declineButtonClasses="absolute top-0 right-0 bg-white decline-cookie-button"
          declineButtonText="X"
          onDecline={handleDeclineCookie}
          buttonClasses="acept-cookie-button"
          disableButtonStyles={true}
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