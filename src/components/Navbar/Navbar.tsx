import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    AppBar, Button, Hidden, IconButton, Toolbar
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { Routes } from '../../types/Routes';
import navbarStyle from './navbarStyle';

type NavbarProps = {
    logo: any,
    logoText: string,
    routes: Routes[];
    handleDrawerToggle: () => void
};
const useStyles = navbarStyle;

const Navbar: React.FC<NavbarProps> = (navbarProps: NavbarProps) => {
    const classes = useStyles();
    return (
        <>

            <AppBar className={classes.navbar}>
                <Toolbar>
                    <div className={classes.logo}>
                        <NavLink to="/maindboard/home">
                            <img alt="logo" className={classes.img} src={navbarProps.logo} />
                        </NavLink>
                        {navbarProps.logoText} {/** hubaloo */}
                    </div>
                    <Hidden smDown>
                        <Button color="inherit">A better search</Button>
                    </Hidden>
                    <IconButton color="inherit" edge="end">
                        <SearchIcon />
                    </IconButton>
                    <Hidden only={["xs", "md"]}>
                        <IconButton color="inherit" edge="end"
                            onClick={navbarProps.handleDrawerToggle}>
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Hidden smUp>
                <AppBar className={classes.bottomNavBar} position="fixed">
                    <Toolbar className={classes.spacedIcons}>
                        {navbarProps.routes.map((routes: Routes) => (
                            <IconButton color="inherit" edge="end">
                                <NavLink className={classes.iconLink} to={routes.layout + routes.path}>
                                    <routes.icon className={classes.icons} />
                                </NavLink>
                            </IconButton>
                        ))}
                    </Toolbar>
                </AppBar>
            </Hidden>
        </>
    )
};

export default Navbar;
