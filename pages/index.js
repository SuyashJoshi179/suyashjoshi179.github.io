import { Button, Chip, Stack, useTheme } from '@mui/material';
import { Description } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Head from 'next/head';
import { urls } from '../public/toggles';
import styles from '../styles/Home.module.css';

export default function Home() {
  const theme = useTheme();

  return (
    <div className={styles.container}>
        <Head>
          <title>Suyash Joshi | Portfolio</title>
          <meta name="description" content="Suyash Joshi's Portfolio" />
          <link rel="icon" href="/Logo.svg" />
          
        </Head>

        <main className={styles.main}>
          <div className={styles.title}>
            Hi!👋🏻 I&nbsp;am<br /><span>Suyash Joshi</span>
          </div>

          <p className={styles.description}>
            A Full Stack developer and Problem Solver
          </p>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Button variant="outlined" href='experience' >EXPERIENCE</Button>
            <Button variant="outlined" href='skills' >SKILLS</Button>
            <Button variant="outlined" href='projects' >PROJECTS</Button>
            <Button variant="outlined" href='education' >EDUCATION</Button>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className={styles.links} >
            <Stack direction="row" spacing={2} >
              <a target="_blank" rel='noreferrer' href={urls.resume}><Chip label="Resume" icon={<Description fontSize="small" />} onClick={() => { }} /></a>
              <a target="_blank" rel='noreferrer' href={urls.github}><Chip label="GitHub" icon={<GitHubIcon fontSize="small" />} onClick={() => { }} /></a>
            </Stack>
            <Stack direction="row" spacing={2} >
              <a target="_blank" rel='noreferrer' href={urls.linkedin}><Chip label="LinkedIn" icon={<LinkedInIcon />} onClick={() => { }} /></a>
              <a target="_blank" rel='noreferrer' href={urls.email}><Chip label="Email" icon={<AlternateEmailIcon fontSize="small" />} onClick={() => { }} /></a>
            </Stack>
          </Stack>

        </main>

        <footer
          style={{
            width: '100%',
            height: '50px',
            borderTop: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'large',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }}
        >
          Made with ❤️ &nbsp;by Suyash Joshi.
        </footer>
      </div>
  );
}
