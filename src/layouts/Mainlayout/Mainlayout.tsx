import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import sidebarBgImage from '../../assets/img/sidebar-bg.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import routes from '../../Routes';
import { Routes } from '../../types/Routes';
import mainlayoutStyle from './mainlayoutStyle';

const useStyles = mainlayoutStyle;

const Mainlayout: React.FC = () => {
    const [drawerOpen, setDrawerToggle] = React.useState(false);
    const classes = useStyles();

    const handleDrawerToggle = (): void => {
        setDrawerToggle(!drawerOpen);
    }
    const resizeFunction = () => {
        if (window.innerWidth <= 960) {
            setDrawerToggle(false);
        }
    };
    const switchRoutes = (
        <Switch>
            {routes.map((prop: Routes) => {
                if (prop.layout === '/mainboard') {
                    return (
                        <Route
                            component={prop.component}
                            key={prop.routeId}
                            path={prop.layout + prop.path}
                        />
                    );
                }
                return null;
            })}
            <Redirect from="/mainboard" to="/mainboard/home" />
        </Switch>
    );
    React.useEffect(() => {
        window.addEventListener('resize', resizeFunction);
    });

    return (
        <div className={classes.wrapper}>
            <Sidebar
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                image={sidebarBgImage}
                routes={routes} />
            <div className={classes.mainPanel}>
                <Navbar
                    handleDrawerToggle={handleDrawerToggle}
                    logo={logo} logoText="hubaloo"
                    routes={routes} />
                <div className={classes.content}>
                    <div className={classes.container}>{switchRoutes}</div>
                </div>
            </div>
        </div>
    )
};

export default Mainlayout;
