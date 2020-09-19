import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineIcon from "@material-ui/icons/PersonOutlineOutlined";
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined';
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import WavesIcon from "@material-ui/icons/Waves";

import { Routes } from "./types/Routes";
import EventsPage from './views/EventsPage/Events';
import HomePage from './views/HomePage/Home';
import ProfilePage from './views/ProfilePage/Profile';
import SpotsPage from './views/SpotsPage/Spots';
import WebcamsPage from './views/WebcamsPage/Webcams';

const routes: Routes[] = [
    {
        routeId: 10,
        path: '/home',
        icon: HomeOutlinedIcon,
        routeName: 'Home',
        component: HomePage,
        layout: '/mainboard'
    },
    {
        routeId: 20,
        path: '/profile',
        icon: PersonOutlineIcon,
        routeName: 'Profile',
        component: ProfilePage,
        layout: '/mainboard'
    },
    {
        routeId: 30,
        path: '/liveCams',
        icon: VideocamOutlinedIcon,
        routeName: 'Webcams',
        component: WebcamsPage,
        layout: '/mainboard'
    },

    {
        routeId: 40,
        path: '/events',
        icon: WavesIcon,
        routeName: 'Events',
        component: EventsPage,
        layout: '/mainboard'
    },
    {
        routeId: 50,
        path: '/spots',
        icon: PoolOutlinedIcon,
        routeName: 'Spots',
        component: SpotsPage,
        layout: '/mainboard'
    },
];

export default routes;
