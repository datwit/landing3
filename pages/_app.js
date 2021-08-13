import '../styles/tailwind.css' 
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
