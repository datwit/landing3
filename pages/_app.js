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
    
    return (
      <>   
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json"></link>
            <meta name="description" content="Machine learning solutions from A-Z to help companies expand their possibilities." />
            <meta name="robots" content="index, nofollow" />
            <meta name="language" content="English" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="theme-color" content='#ffffff' />
        </Head>
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
          Our site uses different technologies to collect and store information in order to give you the best online experience. By clicking on "I understand", you are consenting to the use of these technologies.     
          <Link href="/info/policy/" className="links-cookies-consent"> Privacy Policy</Link>
        </CookieConsent>
        <Component {...pageProps} />
      </>
    )
}

export default MyApp