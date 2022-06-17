import { Box, Card, CardContent, Divider, IconButton, Stack, ThemeProvider, Tooltip, Typography } from '@material-ui/core';
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
import Image from 'next/image';
import Script from 'next/script';
import data from "../../public/data.json";
import { theme } from '../../public/toggles';
import styles from '../../styles/Skills.module.css';
import VerticalCarousel from './VertCarousal';

export default function Home() {
    const actions = [
        { icon: <HomeIcon />, name: 'Home', link: '/' },
        { icon: <AccountTreeIcon />, name: 'Projects', link: '/projects' },
        { icon: <PeopleIcon />, name: 'Contributions', link: '/contributions' },
        { icon: <FunctionsIcon />, name: 'Skills', link: '/skills' },
        { icon: <LocalLibraryIcon />, name: 'Education', link: '/education' },
    ];

    const rotateArray = (arr, k) => arr.slice(k).concat(arr.slice(0, k));

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
                        Skills
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
                <main className={styles.main} style={{ overflow: "hidden" }}>
                    <div className={styles.stitle}>
                        What I do
                    </div>
                    <Stack direction='row'>
                        <VerticalCarousel data={rotateArray(data.slides, 0)} dir="next" dur={0} />
                        <VerticalCarousel data={rotateArray(data.slides, 8).reverse()} dir="prev" dur={0} />
                        <VerticalCarousel data={rotateArray(data.slides, 16)} dir="next" dur={0} />
                        <VerticalCarousel data={rotateArray(data.slides, 24).reverse()} dir="prev" dur={0} />
                        <VerticalCarousel data={rotateArray(data.slides, 32)} dir="next" dur={0} />
                    </Stack>
                    <Stack className={styles.cards}>
                        <Divider textAlign="left" sx={{ marginTop: "5vh", fontSize: "1.7rem" }} >Web Developement</Divider>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 0 }} >
                                <Script src="/lottie-player.js" strategy='beforeInteractive' />
                                <lottie-player src="/frontend.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Frontend Developement
                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary">
                                    I build complex dynamic websites which emphasize efficiency, responsiveness, interactivity and SEO.
                                </Typography>
                                {data.slides.filter(i => i.domain.includes("frontend")).map(i => (
                                    <Tooltip key={i.name} title={i.name}>
                                        <IconButton sx={{ border: `1px solid ${i.color}`, padding: "10px", margin: "5px" }} aria-label={i.name} >
                                            <Image src={i.url} alt={i.name} width="30px" height="30px" loading="eager" unoptimized />
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 2, padding: 0 }} >
                                <Script src="/lottie-player.js" strategy='beforeInteractive' />
                                <lottie-player src="/cloud.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 1 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Backend Developement
                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary">
                                    I develope robust, secure, scalable and highly functional backends that adhere to the REST architectural constraints.
                                </Typography>
                                {data.slides.filter(i => i.domain.includes("backend") || i.domain.includes("cloud") || i.domain.includes("database")).map(i => (
                                    <Tooltip key={i.name} title={i.name}>
                                        <IconButton sx={{ border: `1px solid ${i.color}`, padding: "10px", margin: "5px" }} aria-label={i.name} >
                                            <Image src={i.url} alt={i.name} width="30px" height="30px" loading="eager" unoptimized />
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </CardContent>
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