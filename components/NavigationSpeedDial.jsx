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
import React from 'react';

const actions = [
    { icon: <HomeIcon />, name: 'Home', link: '/' },
    { icon: <Work />, name: 'Experience', link: '/experience' },
    { icon: <LightbulbOutlined />, name: 'Skills', link: '/skills' },
    { icon: <AccountTreeIcon />, name: 'Projects', link: '/projects' },
    { icon: <LocalLibraryIcon />, name: 'Education', link: '/education' },
];

const NavigationSpeedDial = () => {
    return (
        <SpeedDial
            ariaLabel="Navigation SpeedDial"
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
    );
};

export default NavigationSpeedDial;
