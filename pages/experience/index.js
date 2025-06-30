import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Stack, ThemeProvider, Typography } from '@mui/material';
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
import { theme, urls } from '../../public/toggles';
import eduStyles from '../../styles/Education.module.css';
import NavigationSpeedDial from '../../components/NavigationSpeedDial';
import projectStyles from '../../styles/Projects.module.css';

export default function Home() {
    const actions = [
        { icon: <HomeIcon />, name: 'Home', link: '/' },
        { icon: <Work />, name: 'Experience', link: '/experience' },
        { icon: <LightbulbOutlined />, name: 'Skills', link: '/skills' },
        { icon: <AccountTreeIcon />, name: 'Projects', link: '/projects' },
        { icon: <LocalLibraryIcon />, name: 'Education', link: '/education' },
    ];

    return (
        <div className={projectStyles.container}>
                <Head>
                    <title>Suyash Joshi | Experience</title>
                    <meta name="description" content="Suyash Joshi's Portfolio" />
                    <link rel="icon" href="/Logo.svg" />
                    
                </Head>
                <div className={projectStyles.top}>
                    <Box className={projectStyles.title}>
                        Experience
                    </Box>
                    <NavigationSpeedDial />
                </div>
                <main className={projectStyles.main}>
                    <Stack style={{ maxWidth: 760 }} className={eduStyles.cards}>
                        <Divider textAlign="left" sx={{ marginTop: "5vh", fontSize: "1.7rem" }} >Work Experience</Divider>
                        <Card className={eduStyles.card}>
                            <CardContent sx={{ order: 1, padding: 2, textAlign: "center" }} >
                                <Image src='/Experience/mastercard.svg' alt="MasterCard Logo" width={200} height={200} loading="eager" />
                            </CardContent>
                            <CardContent className={eduStyles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    MasterCard
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Software Engineer
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="div" sx={{ fontSize: '1.25rem' }}>
                                    <div>Loyalty Rewards</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={eduStyles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>Full-time</div>
                                        <div>June 2023 - Present</div>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={eduStyles.card}>
                            <CardContent sx={{ order: 1, padding: 2, textAlign: "center" }} >
                                <Image src='/Experience/siemens.svg' alt="Siemens Logo" width={200} height={200} loading="eager" />
                            </CardContent>
                            <CardContent className={eduStyles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Siemens DISW
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Software Developement Intern
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="div" sx={{ fontSize: '1.25rem' }}>
                                    <div>PLM Software</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={eduStyles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>Internship</div>
                                        <div>May 2022 - July 2022</div>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                    <Stack>
                        <Divider textAlign="left" sx={{ marginTop: "5vh", fontSize: "1.7rem" }} >Open Source Contributions</Divider>
                        <Card sx={{ maxWidth: 700 }} className={projectStyles.card}>
                            <CardMedia
                                component="img"
                                width="100%"
                                image={"/Experience/cleancss.svg"}
                                alt="Clean CSS Home"
                            />
                            <CardContent className={projectStyles.cardcont}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Clean CSS
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="div" sx={{ fontSize: '1.25rem' }}>
                                    clean-css is a fast and efficient CSS optimizer for Node.js platform and any modern browser. According to <a style={{ color: "#007FFF", textDecoration: "underline" }} href='http://goalsmashers.github.io/css-minification-benchmark/'>tests</a> it is one of the best available.
                                </Typography>
                            </CardContent>
                            <CardActions className={projectStyles.cardcont}>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.cleancss.website} >Website</Button>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.cleancss.github} >GitHub</Button>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.cleancss.issue} >Issue</Button>
                                <Button size="small" target="_blank" rel='noreferrer' href={urls.cleancss.pr} >PR</Button>
                                {/* <Button size="small" href='projects/crypt' >Learn More</Button> */}
                            </CardActions>
                        </Card>
                    </Stack>

                </main>

                <footer className={projectStyles.footer}>
                    Made with ❤️ &nbsp;by Suyash Joshi.
                </footer>
            </div>
    );
}