import React from 'react';

import logo from '../../assets/img/reactlogo.png';
import sidebarBgImage from '../../assets/img/sidebar-bg.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import routes from '../../Routes';
import mainlayoutStyle from './mainlayoutStyle';

const useStyles = mainlayoutStyle;

const Mainlayout: React.FC = () => {
    const [drawerOpen, setDrawerToggle] = React.useState(false);
    const classes = useStyles();

    const handleDrawerToggle = (): void => {
        setDrawerToggle(!drawerOpen);
    }

    return (
        <div className={classes.wrapper}>
            <Sidebar
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                image={sidebarBgImage}
                routes={routes} />
            <div className={classes.mainPanel}>
                <Navbar handleDrawerToggle={handleDrawerToggle} logo={logo} logoText="hubaloo" />
            </div>
        </div>
    )
};

export default Mainlayout;
