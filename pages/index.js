import { Button, Chip, Stack, ThemeProvider } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { theme, urls } from '../public/toggles';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter()
  const handleClick = (href) => {
    router.push(href, href, {
      shallow: true,
    });
  }
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
            Hi!👋🏻 I&nbsp;am<br /><span>Suyash Joshi</span>
          </div>

          <p className={styles.description}>
            A Full Stack developer and Machine Learning enthusiast!
          </p>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Button variant="outlined" onClick={() => handleClick('projects')}>PROJECTS</Button>
            <Button variant="outlined" onClick={() => handleClick('skills')}>SKILLS</Button>
            <Button variant="outlined" onClick={() => handleClick('education')}>EDUCATION</Button>
            <Button variant="outlined" onClick={() => handleClick('contact')}>CONTACT</Button>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className={styles.links} >
            <Stack direction="row" spacing={2} >
              <a target="_blank" rel='noreferrer' href={urls.resume}><Chip label="Resume" icon={<GetAppRoundedIcon />} onClick={() => { }} /></a>
              <a target="_blank" rel='noreferrer' href={urls.github}><Chip label="GitHub" icon={<GitHubIcon fontSize="small" />} onClick={() => { }} /></a>
            </Stack>
            <Stack direction="row" spacing={2} >
              <a target="_blank" rel='noreferrer' href={urls.linkedin}><Chip label="LinkedIn" icon={<LinkedInIcon />} onClick={() => { }} /></a>
              <a target="_blank" rel='noreferrer' href={urls.email}><Chip label="Email" icon={<AlternateEmailIcon fontSize="small" />} onClick={() => { }} /></a>
            </Stack>
          </Stack>

        </main>

        <footer className={styles.footer}>
          Made with ❤️ &nbsp;by Suyash Joshi.
        </footer>
      </div>
    </ThemeProvider>
  )
}
