import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import '../styles/globals.css';
import "../styles/carousalStyles.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#007FFF',
          },
        },
        typography: {
          fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          h5: {
              fontSize: '1.5rem',
              fontWeight: 400,
              lineHeight: 1.334,
              letterSpacing: '0em',
          },
          body2: {
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 1.43,
              letterSpacing: '0.01071em',
          },
        }
      }),
    [mode],
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={poppins.className}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 1,
          }}
        >
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp
