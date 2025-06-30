import { Box, Card, CardContent, Divider, IconButton, Stack, ThemeProvider, Tooltip, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Work from '@mui/icons-material/Work';
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
import NavigationSpeedDial from '../../components/NavigationSpeedDial';

export default function Home() {
    const actions = [
        { icon: <HomeIcon />, name: 'Home', link: '/' },
        { icon: <Work />, name: 'Experience', link: '/experience' },
        { icon: <LightbulbOutlined />, name: 'Skills', link: '/skills' },
        { icon: <AccountTreeIcon />, name: 'Projects', link: '/projects' },
        { icon: <LocalLibraryIcon />, name: 'Education', link: '/education' },
    ];

    const rotateArray = (arr, k) => arr.slice(k).concat(arr.slice(0, k));

    return (
        <div className={styles.container}>
                <Head>
                    <title>Suyash Joshi | Skills</title>
                    <meta name="description" content="Suyash Joshi's Portfolio" />
                    <link rel="icon" href="/Logo.svg" />
                    
                </Head>
                <div className={styles.top}>
                    <Box className={styles.title}>
                        Skills
                    </Box>
                    <NavigationSpeedDial />
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
                        <Divider textAlign="left" sx={{ marginTop: "5vh", fontSize: "1.7rem" }} >Software Developement</Divider>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 0 }} >
                                <Script src="/lottie-player.js" strategy='lazyOnload' />
                                <lottie-player src="/frontend.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Frontend Developement
                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary" component="div" sx={{ fontSize: '1.25rem' }}>
                                    I build complex dynamic websites which emphasize efficiency, responsiveness, interactivity and SEO.
                                </Typography>
                                {data.slides.filter(i => i.domain.includes("frontend")).map(i => (
                                    <Tooltip key={i.name} title={i.name}>
                                        <IconButton sx={{ border: `1px solid ${i.color}`, padding: "10px", margin: "5px" }} aria-label={i.name} href={i.link} target="_blank" >
                                            <Image src={i.url} alt={i.name} width={30} height={30} loading="eager" />
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 2, padding: 0 }} >
                                <Script src="/lottie-player.js" strategy='lazyOnload' />
                                <lottie-player src="/cloud.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 1 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Backend Developement
                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary" component="div" sx={{ fontSize: '1.25rem' }}>
                                    I develope robust, secure, scalable and highly functional backends that adhere to the Software design principles.
                                </Typography>
                                {data.slides.filter(i => i.domain.includes("backend") || i.domain.includes("cloud") || i.domain.includes("database")).map(i => (
                                    <Tooltip key={i.name} title={i.name}>
                                        <IconButton sx={{ border: `1px solid ${i.color}`, padding: "10px", margin: "5px" }} aria-label={i.name} href={i.link} target="_blank" >
                                            <Image src={i.url} alt={i.name} width={30} height={30} loading="eager" />
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </CardContent>
                        </Card>
                    </Stack>
                    <Stack className={styles.cards}>
                        <Divider textAlign="left" sx={{ marginTop: "5vh", fontSize: "1.7rem" }} >Competative Programming</Divider>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 0 }} >
                                <Script src="/lottie-player.js" strategy='lazyOnload' />
                                <lottie-player src="/trending.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Expert at CodeForces
                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary" component="div" sx={{ fontSize: '1.25rem' }}>
                                    I have given multiple global contests on CodeForces platform ranking me Expert with max rating 1604.
                                </Typography>
                                {data.slides.filter(i => i.name === "CodeForces").map(i => (
                                    <Tooltip key={i.name} title={i.name}>
                                        <IconButton sx={{ border: `1px solid ${i.color}`, padding: "10px", margin: "5px" }} aria-label={i.name} href={i.link} target="_blank" >
                                            <Image src={i.url} alt={i.name} width={30} height={30} loading="eager" />
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 2, padding: 0 }} >
                                <Script src="/lottie-player.js" strategy='lazyOnload' />
                                <lottie-player src="/piechart.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 1 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    5 Star on CodeChef
                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary" component="div" sx={{ fontSize: '1.25rem' }}>
                                    Became 5 Star on CodeChef with max rating 2028 within 6 contests. Among top 3000 competative programmers globally on the platform.
                                </Typography>
                                {data.slides.filter(i => i.name === "CodeChef").map(i => (
                                    <Tooltip key={i.name} title={i.name}>
                                        <IconButton sx={{ border: `1px solid ${i.color}`, padding: "10px", margin: "5px" }} aria-label={i.name} href={i.link} target="_blank" >
                                            <Image src={i.url} alt={i.name} width={30} height={30} loading="eager" />
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
    );
}