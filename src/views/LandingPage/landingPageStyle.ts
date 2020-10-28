import { makeStyles } from '@material-ui/core';

import * as bg from '../../assets/img/paintwallpaper.jpg';

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
        backgroundColor: 'white',
        opacity: '0.9',
        padding: '1rem',
        borderRadius: '5%',
        border: '2px solid #720178',
        zIndex: 2,
    },
    welcomeTitle: {
        textTransform: 'uppercase',
        letterSpacing: '0.5rem'
    },
    btn: {
        textDecoration: 'none',
        color: 'white',
        borderRadius: '5px',
        padding: '0 5px'
    }
}));

export default landingPageStyle;
