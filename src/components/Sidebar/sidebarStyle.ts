import { makeStyles, Theme } from '@material-ui/core';

import { drawerWidth } from '../../assets/tsstyles/constants';

const sidebarStyle = makeStyles((theme: Theme) => ({
    drawerPaper: {
        width: drawerWidth,
        border: '0',
        zIndex: 1,
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
        '&:hover,&:focus,&:visited,&': {
            // color: 'white'
        }
    },
    itemLink: {
        display: 'flex',
        width: 'auto',
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
            background: 'black',
            opacity: '.9'
        }
    }
}));

export default sidebarStyle;
