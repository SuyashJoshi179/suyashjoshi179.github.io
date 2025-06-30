import { Link, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import Script from 'next/script';
import { theme } from '../public/toggles';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Suyash Joshi | Portfolio</title>
          <meta name="description" content="Suyash Joshi's Portfolio" />
          <link rel="icon" href="/Logo.svg" />
          
        </Head>

        <main className={styles.main}>
          <Script src="/lottie-player.js" strategy='lazyOnload' />
          <lottie-player src="/under_construction.json" background="transparent" speed="1" style={{ width: "70vw", height: "70vh" }} loop autoplay></lottie-player>
          <br />
          <Link href='/' >Go back to home</Link>
        </main>
      </div>
  )
}
