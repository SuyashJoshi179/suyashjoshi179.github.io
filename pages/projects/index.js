import { Button, Card, Chip, Stack, ThemeProvider, CardMedia, Typography, CardContent, CardActions, Container, makeStyles, Box } from '@material-ui/core';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FunctionsIcon from '@mui/icons-material/Functions';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { theme, urls } from '../../public/toggles';
import styles from '../../styles/Projects.module.css';

export default function Home() {
    const router = useRouter()
    const handleClick = (href) => {
        router.push(href, href, {
            shallow: true,
        });
    };
    
    const actions = [
        { icon: <HomeIcon />, name: 'Home' },
        { icon: <AccountTreeIcon />, name: 'Projects' },
        { icon: <FunctionsIcon />, name: 'Skills' },
        { icon: <LocalLibraryIcon />, name: 'Education' },
        { icon: <ContactPageIcon />, name: 'Contact' },
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
                                image="/Projects/Crypt.png"
                                alt="Crypt"
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
                                <Button size="small" onClick={() => handleClick('projects/crypt')}>Website</Button>
                                <Button size="small" onClick={() => handleClick('projects')}>GitHub</Button>
                                <Button size="small" onClick={() => handleClick('projects')}>Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 700 }} className={styles.card}>
                            <CardMedia
                                component="img"
                                width="100%"
                                image="/Projects/Crypt.png"
                                alt="Crypt"
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
                                <Button size="small" onClick={() => handleClick('projects/crypt')}>Website</Button>
                                <Button size="small" onClick={() => handleClick('projects')}>GitHub</Button>
                                <Button size="small" onClick={() => handleClick('projects')}>Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 700 }} className={styles.card}>
                            <CardMedia
                                component="img"
                                width="100%"
                                image="/Projects/Crypt.png"
                                alt="Crypt"
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
                                <Button size="small" onClick={() => handleClick('projects/crypt')}>Website</Button>
                                <Button size="small" onClick={() => handleClick('projects')}>GitHub</Button>
                                <Button size="small" onClick={() => handleClick('projects')}>Learn More</Button>
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