import { makeStyles, Theme } from '@material-ui/core';

const sidebarStyle = makeStyles((theme: Theme) => ({
    drawerPaper: {
        width: '200px',
        color: 'green',
        backgroundColor: 'pink'
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
        color: 'black',
        width: '24px',
        height: '30px',
        fontSize: '24px',
        lineHeight: '30px',
        float: 'left',
        marginRight: '15px',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    itemText: {
        margin: '0',
        lineHeight: '30px',
        fontSize: '1rem',
        color: 'black'
    },
    // background: {
    //     position: 'absolute',
    //     zIndex: 1,
    //     height: '100%',
    //     width: '100%',
    //     display: 'block',
    //     top: '0',
    //     left: '0',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center center',
    //     '&:after': {
    //         position: 'absolute',
    //         zIndex: 3,
    //         width: '100%',
    //         height: '100%',
    //         content: '""',
    //         display: 'block',
    //         background: 'black',
    //         opacity: '.9'
    //     }
    // }
}));

export default sidebarStyle;
