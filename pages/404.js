import { Link, ThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import { theme } from '../public/toggles';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Head>
          <title>Suyash Joshi | Portfolio</title>
          <meta name="description" content="Suyash Joshi's Portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>

        <main className={styles.main}>
          <div className={styles.title}>
          Coming Soon..
          </div>
          <br />
          <Link href ='/' >Go back to home</Link>
        </main>
      </div>
    </ThemeProvider>
  )
}
