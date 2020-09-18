import Person from "@material-ui/icons/Person";
import VideocamIcon from "@material-ui/icons/Videocam";
import WavesIcon from "@material-ui/icons/Waves";

// import Home from './views/Home/Home';
// import Profile from './views/Profile/Profile';

import { Routes } from "./types/Routes";

const routes: Routes[] = [
    {
        routeId: 10,
        path: '/home',
        // icon: Person,
        routeName: 'Home',
        // component: Home,
        layout: '/mainboard'
    },
    {
        routeId: 20,
        path: '/user',
        // icon: Person,
        routeName: 'Profile',
        // component: Profile,
        layout: '/mainboard'
    },
    {
        routeId: 30,
        path: '/liveCams',
        // icon: VideocamIcon,
        routeName: 'Webcams',
        // component: Home,
        layout: '/mainboard'
    },

    {
        routeId: 40,
        path: '/events',
        // icon: WavesIcon,
        routeName: 'Events',
        // component: Profile,
        layout: '/mainboard'
    },
    {
        routeId: 50,
        path: '/spots',
        // icon: WavesIcon,
        routeName: 'Spots',
        // component: Home,
        layout: '/mainboard'
    },
];

export default routes;
