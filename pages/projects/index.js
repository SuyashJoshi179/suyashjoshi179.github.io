import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, ThemeProvider, Typography } from '@material-ui/core';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FunctionsIcon from '@mui/icons-material/Functions';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
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
        { icon: <FunctionsIcon />, name: 'Skills', link: '/skills' },
        { icon: <LocalLibraryIcon />, name: 'Education', link: '/education' },
        { icon: <ContactPageIcon />, name: 'Contact', link: '/contact' },
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
                        Projects
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
                                image="/Projects/crypt.png"
                                alt="Crypt Home"
                            />
                            <CardContent className={styles.cardcont}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Crypt
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Crypt is a cryptocurrency website, where you can check out latest cryptocurrencies, their current rates, historical rates and their trend. Which helps you to predict their future, so you can invest your money wisely.
                                </Typography>
                            </CardContent>
                            <CardActions className={styles.cardcont}>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.crypt.website} >Website</Button>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.crypt.github} >GitHub</Button>
                                <Button size="small" href='projects/crypt' >Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 700 }} className={styles.card}>
                            <CardMedia
                                component="img"
                                width="100%"
                                image="/Projects/inquizitive.png"
                                alt="Inquizitive Home"
                            />
                            <CardContent className={styles.cardcont}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Inquizitive
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Inquizitive is an event/competition in Credenz Tech Dayz (CTD) organised by PICT IEEE Student Branch. It is an online quiz competition where students compete by answering questions.
                                </Typography>
                            </CardContent>
                            <CardActions className={styles.cardcont}>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.inquizitive.github} >GitHub</Button>
                                <Button size="small" href='projects/crypt' >Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 700 }} className={styles.card}>
                            <CardMedia
                                component="img"
                                width="100%"
                                image="/Projects/portfolio.png"
                                alt="Portfolio Home"
                            />
                            <CardContent className={styles.cardcont}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Portfolio
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A portfolio website provides professional information about an individual or a company and presents a showcase of their work. This website shows my work.
                                </Typography>
                            </CardContent>
                            <CardActions className={styles.cardcont}>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.portfolio.website} >Website</Button>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.portfolio.github} >GitHub</Button>
                                <Button size="small" href='projects/portfolio' >Learn More</Button>
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