import { Box, Card, CardContent, Divider, Link, Stack, ThemeProvider, Typography } from '@material-ui/core';
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
import React from 'react';
import { theme } from '../../public/toggles';
import styles from '../../styles/Education.module.css';

export default function Home() {
    const actions = [
        { icon: <HomeIcon />, name: 'Home', link: '/' },
        { icon: <Work />, name: 'Experience', link: '/experience' },
        { icon: <LightbulbOutlined />, name: 'Skills', link: '/skills' },
        { icon: <AccountTreeIcon />, name: 'Projects', link: '/projects' },
        { icon: <LocalLibraryIcon />, name: 'Education', link: '/education' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <Head>
                    <title>Suyash Joshi | Education</title>
                    <meta name="description" content="Suyash Joshi's Portfolio" />
                    <link rel="icon" href="/Logo.svg" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <div className={styles.top}>
                    <Box className={styles.title}>
                        Education
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
                    <Stack className={styles.cards}>
                        <Divider textAlign="left" sx={{ marginTop: "5vh", fontSize: "1.7rem" }} >Academics</Divider>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: '3rem 2rem', textAlign: "center" }} >
                                <Image src='/Education/sbu.png' alt="Stony Brook University Logo" width="170%" height="140%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Master of Science in Computer Science
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Department of Computer Science
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Stony Brook University, New York</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>GPA: In Progress</div>
                                        <div>Aug 2025 - Present</div>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 2, textAlign: "center" }} >
                                <Image src='/Education/pict.png' alt="PICT Logo" width="200%" height="200%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Bachelor of Computer Engineering
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Pune Institute of Computer Technology, Pune
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Savitribai Phule Pune University</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>CGPA: 9.23/10</div>
                                        <div>July 2019 - May 2023</div>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 4, textAlign: "center" }} >
                                <Image src='/Education/dscl.png' alt="DSCL Logo" width="170%" height="170%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Higher Secondary Education
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Dayanand Science Junior College, Latur
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Maharashtra Board</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>HSC Percentage: 89.23%</div>
                                        <div>Jun 2017 - Jun 2019</div>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 4, textAlign: "center" }} >
                                <Image src='/Education/bsps.png' alt="Keshavaraj Logo" width="170%" height="170%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Secondary Education
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Shri Keshavaraj Vidyalaya, Latur
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Maharashtra Board</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>SSC Percentage: 86.60%</div>
                                        <div>Jun 2007 - May 2017</div>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                    <Stack className={styles.cards}>
                        <Divider textAlign="left" sx={{ marginTop: "5vh", fontSize: "1.7rem" }} >Courses</Divider>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 2, textAlign: "center" }} >
                                <Image src='/Education/stanford.svg' alt="Stanford Logo" width="200%" height="200%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Machine Learning
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Andrew Ng, Stanford Online
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Coursera</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>26 Apr 2020</div>
                                        <Link underline="hover" target="_blank" rel="noreferrer" href="https://coursera.org/share/e8b0df37fe6dc88f48b5d78e6f8d4828">Certificate</Link>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 2, textAlign: "center" }} >
                                <Image src='/Education/Deeplearning.png' alt="DeepLearning.ai Logo" width="200%" height="200%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Deep Learning Specialization
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    DeepLearning.AI
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Coursera</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>3 Jul 2020</div>
                                        <Link underline="hover" target="_blank" rel="noreferrer" href="https://coursera.org/share/7b28dc3ec2002c7d668ef3530bb682f3">Certificate</Link>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 0, textAlign: "center" }} >
                                <Image src='/Education/johnshopkins.svg' alt="Johns Hopkins Logo" width="230%" height="230%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    HTML, CSS, and Javascript for Web Developers
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Yaakov Chaikin, Johns Hopkins University
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Coursera</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>21 Jul 2020</div>
                                        <Link underline="hover" target="_blank" rel="noreferrer" href="https://coursera.org/share/d457840d6ccb87ca2ef0369c58e37fc2">Certificate</Link>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 0, textAlign: "center" }} >
                                <Image src='/Education/hongkong.svg' alt="Hong Kong University Logo" width="230%" height="230%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Full-Stack Web Development with React Specialization
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Jogesh K. Muppala, The Hong Kong University of Science and Technology
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Coursera</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>30 Dec 2020</div>
                                        <Link underline="hover" target="_blank" rel="noreferrer" href="https://coursera.org/share/1ae6b8f12a8e65b393b7cf3111a4c26c">Certificate</Link>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 2, textAlign: "center" }} >
                                <Image src='/Education/pict.png' alt="PICT Logo" width="200%" height="200%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    Mathematical Foundations for Blockchain
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Blockchain and Distributed Systems Security Lab, PICT Pune
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Online Training Program, PICT</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>10 Jul 2021</div>
                                        <Link underline="hover" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1AOks60EC-lm4Je5cniR_3u9Bv-IxJKdh/view?usp=sharing">Certificate</Link>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={styles.card}>
                            <CardContent sx={{ order: 1, padding: 2, marginTop: 8, marginBottom: 8, textAlign: "center" }} >
                                <Image src='/Education/rinex.png' alt="Rinex.ai Logo" width="200%" height="60%" loading="eager" unoptimized />
                            </CardContent>
                            <CardContent className={styles.cardcont} sx={{ order: 2 }} >
                                <Typography gutterBottom variant="h5" component="div">
                                    AWS with DevOps
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Rinex.ai
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>Entrepreneurship Cell, IIT Kharagpur</div>
                                    <Stack justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} className={styles.edustats} direction={{ xs: 'column', sm: 'row' }}>
                                        <div>30 Sep 2021</div>
                                        <Link underline="hover" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1CLqWCrPWhieQhVPw1QN-J5U1POQmPAOx/view?usp=sharing">Certificate</Link>
                                    </Stack>
                                </Typography>
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