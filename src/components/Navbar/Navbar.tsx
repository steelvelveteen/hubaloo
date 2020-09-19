import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    AppBar, Button, Hidden, IconButton, Toolbar, Typography
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { Routes } from '../../types/Routes';
import navbarStyle from './navbarStyle';

type NavbarProps = {
    logo: any,
    brandName: string,
    routes: Routes[];
    handleDrawerToggle: () => void
};
const useStyles = navbarStyle;

const Navbar: React.FC<NavbarProps> = (navbarProps: NavbarProps) => {
    const classes = useStyles();
    // const activeRoute = (routeName: string): boolean => {
    //     console.log(routeName);
    //     return window.location.pathname === routeName
    // };

    // Code below prints out pathname ex.: /mainboard/profile
    // const activeRoute = () => console.log(window.location.pathname);
    // React.useEffect(() => {
    //     window.addEventListener('load', activeRoute);
    // });

    return (
        <>

            <AppBar className={classes.navbar}>
                <Toolbar>
                    <div className={classes.logo}>
                        <NavLink to="/maindboard/home">
                            <img alt="logo" className={classes.img} src={navbarProps.logo} />
                        </NavLink>
                        <Typography variant="h5">
                            {navbarProps.brandName} {/** hubaloo */}
                        </Typography>
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
                        {navbarProps.routes.map((route: Routes) => (

                            <IconButton color="inherit" edge="end">
                                <NavLink
                                    // activeClassName={activeRoute(route.layout + route.path) ? "activeIcon" : ""}
                                    activeStyle={{
                                        color: '#e25822',
                                        border: '2px solid #e25822'
                                    }}
                                    className={classes.iconLink}
                                    exact
                                    key={route.routeId}
                                    to={route.layout + route.path} >
                                    <route.icon className={classes.icons} />
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
