import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Drawer, Hidden, List, ListItem, ListItemText
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import { fontColorPink } from '../../assets/tsstyles/constants';
import { Routes } from '../../types/Routes';
import sidebarStyle from './sidebarStyle';

type SidebarProps = {
    handleDrawerToggle: () => void;
    // backgroundColor: string;
    // brandLogo: string;
    image: string;
    // textLogo: string;
    routes: Routes[];
    drawerOpen: boolean;
}
const useStyles = sidebarStyle;
const Sidebar: React.FC<SidebarProps> = (sidebarProps: SidebarProps) => {
    const classes = useStyles();
    const { routes, image } = sidebarProps;
    const links = (
        <List className={classes.list}>
            {routes.map((prop: Routes) => (
                <NavLink
                    activeStyle={{
                        backgroundColor: fontColorPink
                    }}
                    className={classes.item}
                    key={prop.routeId}
                    onClick={sidebarProps.handleDrawerToggle}
                    to={prop.layout + prop.path}
                >
                    <ListItem button className={classes.itemLink}>
                        <Icon className={classes.itemIcon}>
                            <prop.icon />
                        </Icon>
                        <ListItemText classes={{ primary: classes.itemText }} primary={prop.routeName} />
                    </ListItem>
                </NavLink>
            ))}
        </List>
    );

    return (
        <>
            <Hidden implementation="js" mdUp>
                <Drawer
                    anchor="right"
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    onClose={sidebarProps.handleDrawerToggle}
                    open={sidebarProps.drawerOpen}
                    variant="temporary"
                >
                    <div className={classes.sidebarWrapper}>{links}</div>
                    <div
                        className={classes.background}
                        style={{ backgroundImage: `url(${image})` }} />

                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    anchor="right"
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    onClose={sidebarProps.handleDrawerToggle}
                    open
                    variant="permanent"
                >
                    <div className={classes.sidebarWrapper}>{links}</div>
                    <div
                        className={classes.background}
                        style={{ backgroundImage: `url(${image})` }} />

                </Drawer>
            </Hidden>
        </>
    );
};

export default Sidebar;
