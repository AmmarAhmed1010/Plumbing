import '../globals.css';
import Footer from '@/components/Footer';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
   return (
    
    <>
     <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Wedges:wght@400;700&display=swap"/> 
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
   )
}

export default MyApp;
