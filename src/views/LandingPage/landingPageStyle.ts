import { makeStyles } from '@material-ui/core';

import * as bg from '../../assets/img/paintwallpaper.jpg';
import { fontColorPink, mainBackgroundColor } from '../../assets/tsstyles/constants';

const landingPageStyle = makeStyles(() => ({
    showcase: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    backgroundContainer: {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        position: 'absolute',
        zIndex: 1,
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    },
    formContainer: {
        backgroundColor: mainBackgroundColor,
        // opacity: '0.9',
        padding: '1rem',
        borderRadius: '2%',
        border: `2px solid ${fontColorPink}`,
        zIndex: 2,
    },
    welcomeTitle: {
        textTransform: 'uppercase',
        letterSpacing: '0.5rem'
    },
    btn: {
        textDecoration: 'none',
        color: 'blue',
        borderRadius: '5px',
        padding: '0 5px'
    }
}));

export default landingPageStyle;
