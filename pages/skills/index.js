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
import Script from 'next/script';
import Image from 'next/image';
import { theme, urls } from '../../public/toggles';
import styles from '../../styles/Skills.module.css';
import VerticalCarousel from './VertCarousal';
import data from "../../public/data.json";

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
                        <VerticalCarousel data={rotateArray(data.slides, 8).reverse()} dir="prev" dur={100} />
                        <VerticalCarousel data={rotateArray(data.slides, 16)} dir="next" dur={200} />
                        <VerticalCarousel data={rotateArray(data.slides, 24).reverse()} dir="prev" dur={300} />
                        <VerticalCarousel data={rotateArray(data.slides, 32)} dir="next" dur={400} />
                    </Stack>
                </main>

                <footer className={styles.footer}>
                    Made with ❤️ &nbsp;by Suyash Joshi.
                </footer>
            </div>
        </ThemeProvider>
    );
}