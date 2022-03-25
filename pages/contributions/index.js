import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, ThemeProvider, Typography } from '@material-ui/core';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CloseIcon from '@mui/icons-material/Close';
import FunctionsIcon from '@mui/icons-material/Functions';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PeopleIcon from '@mui/icons-material/People';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Head from 'next/head';
import { theme, urls } from '../../public/toggles';
import styles from '../../styles/Projects.module.css';

export default function Home() {
    const actions = [
        { icon: <HomeIcon />, name: 'Home', link: '/' },
        { icon: <AccountTreeIcon />, name: 'Projects', link: '/projects' },
        { icon: <PeopleIcon />, name: 'Contributions', link: '/contributions' },
        { icon: <FunctionsIcon />, name: 'Skills', link: '/skills' },
        { icon: <LocalLibraryIcon />, name: 'Education', link: '/education' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <Head>
                    <title>Suyash Joshi | Projects</title>
                    <meta name="description" content="Suyash Joshi's Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <div className={styles.top}>
                    <Box className={styles.title}>
                        Contributions
                    </Box>
                    <div>
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', top: 39, right: 16 }}
                            icon={<SpeedDialIcon icon={<MenuOpenIcon />} openIcon={<CloseIcon />} />}
                            direction="down"
                            color="secondary"
                        >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    href={action.link}
                                />
                            ))}
                        </SpeedDial>
                    </div>
                </div>
                <main className={styles.main}>
                    <Stack>
                        <Card sx={{ maxWidth: 700 }} className={styles.card}>
                            <CardMedia
                                component="img"
                                width="100%"
                                image={"/Contributions/cleancss.svg"}
                                alt="Clean CSS Home"
                            />
                            <CardContent className={styles.cardcont}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Clean CSS
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    clean-css is a fast and efficient CSS optimizer for Node.js platform and any modern browser. According to <a style={{ color: "#007FFF", textDecoration: "underline" }} href='http://goalsmashers.github.io/css-minification-benchmark/'>tests</a> it is one of the best available.
                                </Typography>
                            </CardContent>
                            <CardActions className={styles.cardcont}>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.cleancss.website} >Website</Button>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.cleancss.github} >GitHub</Button>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.cleancss.issue} >Issue</Button>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.cleancss.pr} >PR</Button>
                                {/* <Button size="small" href='projects/crypt' >Learn More</Button> */}
                            </CardActions>
                        </Card>
                    </Stack>

                </main>

                <footer className={styles.footer}>
                    Made with ❤️ &nbsp;by Suyash Joshi.
                </footer>
            </div>
        </ThemeProvider>
    );
}