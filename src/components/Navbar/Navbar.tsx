import React from 'react';

import {
    AppBar, Button, Hidden, IconButton, Toolbar
} from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Menu from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined';
import SearchIcon from '@material-ui/icons/Search';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';

import navbarStyle from './navbarStyle';

type NavbarProps = {
    logo: any,
    logoText: string,
    handleDrawerToggle: () => void
};
const useStyles = navbarStyle;

const Navbar: React.FC<NavbarProps> = (navbarProps: NavbarProps) => {
    const classes = useStyles();
    return (
        <>
            <Hidden xsDown>
                <AppBar className={classes.navbar}>
                    <Toolbar>
                        <div className={classes.logo}>
                            <img alt="logo" className={classes.img} src={navbarProps.logo} />
                            {navbarProps.logoText} {/** hubaloo */}
                        </div>
                        <Hidden smDown>
                            <Button color="inherit">Visible mdUp</Button>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton color="inherit" edge="end">
                                <SearchIcon />
                            </IconButton>
                            <IconButton color="inherit" edge="end"
                                onClick={navbarProps.handleDrawerToggle}>
                                <Menu />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Hidden>
            <Hidden smUp>
                <AppBar className={classes.bottomNavBar} position="fixed">
                    <Toolbar className={classes.spacedIcons}>
                        <IconButton color="inherit" edge="end">
                            <HomeOutlinedIcon />
                        </IconButton>
                        <IconButton color="inherit" edge="end">
                            <PersonOutlineIcon />
                        </IconButton>
                        <IconButton color="inherit" edge="end">
                            <PoolOutlinedIcon />
                        </IconButton>
                        <IconButton color="inherit" edge="end">
                            <VideocamOutlinedIcon />
                        </IconButton>
                        <IconButton color="inherit" edge="end">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit" edge="end">
                            <Menu />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Hidden>
        </>
    )
};

export default Navbar;
