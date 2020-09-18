import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Drawer, Hidden, List, ListItem, ListItemText
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Person from '@material-ui/icons/Person';
import WavesIcon from '@material-ui/icons/Waves';

import { Routes } from '../../types/Routes';
import sidebarStyle from './sidebarStyle';

type SidebarProps = {
    handleDrawerToggle: () => void;
    // backgroundColor: string;
    // brandLogo: string;
    // image: string;
    // textLogo: string;
    routes: Routes[];
    drawerOpen: boolean;
}
const useStyles = sidebarStyle;
const Sidebar: React.FC<SidebarProps> = (sidebarProps: SidebarProps) => {
    const classes = useStyles();
    const { routes } = sidebarProps;
    const links = (
        // <List>
        //     {['Profile', 'Spots', 'Events', 'LiveCams', 'What Not'].map((linkLabel: string) => (
        //         <ListItem button key={linkLabel}>
        //             {linkLabel}
        //         </ListItem>
        //     ))}
        // </List>
        <List className={classes.list}>
            {routes.map((prop: Routes, index: number) => (
                <NavLink
                    className={classes.item}
                    key={prop.routeId}
                    to={prop.layout + prop.path}
                >
                    <ListItem button className={classes.itemLink}>
                        <Icon className={classes.itemIcon}>
                            {index % 2 === 0 ? <WavesIcon /> : <Person />}
                            <WavesIcon />
                        </Icon>
                        <ListItemText className={classes.itemText} primary={prop.routeName}>
                            {prop.routeName}hjkkjh
                        </ListItemText>
                    </ListItem>
                </NavLink>
            ))}
        </List>
    );

    return (
        <>
            <Hidden implementation="css" mdUp>
                <Drawer
                    anchor="right"
                    onClose={sidebarProps.handleDrawerToggle}
                    open={sidebarProps.drawerOpen}
                    variant="temporary"
                >
                    {links}
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer anchor="right"
                    onClose={sidebarProps.handleDrawerToggle}
                    open
                    variant="persistent"
                >
                    {links}
                </Drawer>
            </Hidden>
        </>
    );
};

export default Sidebar;
