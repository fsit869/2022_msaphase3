import React, {useState} from "react";
import {AppBar, CssBaseline, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {SideBar} from "./SideBar";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

// Header component
const Header = ():JSX.Element => {
    const [sideBar, setSideBar] = useState(false);
    const toggleSideBar = () => {
        setSideBar(!sideBar);
    };

    return <React.Fragment>
        <CssBaseline/>
        <AppBar position="relative" sx={{backgroundColor: "#a12020"}}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    arai-label="menu"
                    onClick={toggleSideBar}
                >
                    <MenuIcon/>
                    <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                        <SideBar/>
                    </Drawer>
                </IconButton>

                <Typography variant="h6" sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                    DISLIKE
                </Typography>
                <ThumbDownOffAltIcon/>
            </Toolbar>

        </AppBar>
    </React.Fragment>
};

export default Header;