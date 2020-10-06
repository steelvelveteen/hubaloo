import { makeStyles } from '@material-ui/core';

const landingPageStyle = makeStyles(() => ({
    showcase: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '0 20px',
    },
    videoContainer: {
        position: 'absolute',
        zIndex: 1,
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '&:after': {
            content: '""',
            zIndex: 3,
            height: '100%',
            width: '100%',
            display: 'block',
            backgroundColor: '#f403fc',
            position: 'absolute',
            opacity: '0.1'
        }
    },
    content: {
        zIndex: 2,
    },
    welcomeTitle: {
        textTransform: 'uppercase',
        letterSpacing: '1rem'
    },
    video: {
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
