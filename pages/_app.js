import { ThemeProvider } from '@mui/material';
import { theme } from '../public/toggles';
import '../styles/globals.css';
import "../styles/carousalStyles.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default MyApp
