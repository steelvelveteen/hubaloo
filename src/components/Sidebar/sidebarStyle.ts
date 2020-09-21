import { makeStyles } from '@material-ui/core';

import { drawerWidth, mainBackgroundColor } from '../../assets/tsstyles/constants';

const sidebarStyle = makeStyles(() => ({
    drawerPaper: {
        width: drawerWidth,
        border: '0',
        zIndex: 1,
        font: 'URW Gothic'
    },
    list: {
        marginTop: '20px',
        paddingLeft: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '0',
        listStyle: 'none',
        position: 'unset'
    },
    item: {
        color: 'white',
        position: 'relative',
        display: 'block',
        borderRadius: '3px',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: mainBackgroundColor
        }
    },
    itemLink: {
        // display: 'flex',
        width: 'auto',
        height: '100%',
        transition: 'all 300ms linear',
        margin: '10px 15px 0',
        position: 'relative',
        padding: '10px 15px',
    },
    itemIcon: {
        marginRight: '1rem',
    },
    itemText: {
        fontSize: '0.9rem',
        lineHeight: '1.5rem',
    },
    sidebarWrapper: {
        padding: '10px',
        borderRadius: '3px',
        zIndex: 4,
        position: 'relative',
        height: 'calc(100vh - 75px)',
        overflow: 'auto',
        overflowScrolling: 'touch',

    },
    background: {
        position: 'absolute',
        zIndex: 1,
        height: '100%',
        width: '100%',
        display: 'block',
        top: '0',
        left: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        '&:after': {
            position: 'absolute',
            zIndex: 3,
            width: '100%',
            height: '100%',
            content: '""',
            display: 'block',
            background: mainBackgroundColor,
            opacity: '.8'
        }
    }
}));

export default sidebarStyle;
