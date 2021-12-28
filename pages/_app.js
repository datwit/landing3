import '../styles/tailwind.css' 
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import React,{useEffect} from 'react'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-P79KWZ5' });
    }, []);  
    <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    return <Component {...pageProps} />
}

export default MyApp
