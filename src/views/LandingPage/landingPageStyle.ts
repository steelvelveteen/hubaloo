import { makeStyles } from '@material-ui/core';

import * as bg from '../../assets/img/paintwallpaper.jpg';

const landingPageStyle = makeStyles(() => ({
    showcase: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // color: 'black',
        // padding: '0 20px',
    },
    backgroundContainer: {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        position: 'absolute',
        // zIndex: 1,
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    },
    formContainer: {
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '5%',
        border: '1px solid black',
        zIndex: 2,
    },
    welcomeTitle: {
        textTransform: 'uppercase',
        letterSpacing: '0.5rem'
    },
    img: {
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        objectFit: 'cover'
    },
    btn: {
        textDecoration: 'none',
        color: 'white',
        borderRadius: '5px',
        padding: '0 5px'
    }
}));

export default landingPageStyle;
