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
        position: 'relative',
        display: 'block',
        textDecoration: 'none',
        '&:hover,&:focus,&:visited,&': {
            color: 'white'
        }
    },
    itemLink: {
        width: 'auto',
        transition: 'all 300ms linear',
        margin: '10px 15px 0',
        borderRadius: '3px',
        position: 'relative',
        display: 'block',
        padding: '10px 15px',
        backgroundColor: 'transparent'
    },
    itemIcon: {
        width: '28px',
        height: '30px',
        lineHeight: '30px',
        float: 'left',
        marginRight: '15px',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    itemText: {
        margin: '0',
        fontSize: '0.9rem',
    },
    sidebarWrapper: {
        zIndex: 4,
        position: 'relative',
        height: 'calc(100vh - 75px)',
        overflow: 'auto',
        width: '200px',
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
