import { makeStyles } from '@material-ui/core';

import * as bg from '../../assets/img/paintwallpaper.jpg';
import { lightPurple, mainBackgroundColor } from '../../assets/tsstyles/constants';

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
        minWidth: '368px',
        backgroundColor: mainBackgroundColor,
        padding: '1rem',
        borderRadius: '2%',
        border: `2px solid ${lightPurple}`,
        zIndex: 2,
    },
    btn: {
        textDecoration: 'none',
        color: 'blue',
        borderRadius: '5px',
        padding: '0 5px'
    }
}));

export default landingPageStyle;
