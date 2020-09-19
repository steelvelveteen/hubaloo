import { makeStyles, Theme } from '@material-ui/core';

const navbarStyle = makeStyles((theme: Theme) => ({
    navbar: {
        position: 'relative' as const,
        backgroundColor: 'black',
    },
    logo: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        position: 'relative' as const,
        zIndex: 4,
    },
    img: {
        width: '55px',
        height: '40px',
        paddingRight: '25px',
    },
    bottomNavBar: {
        backgroundColor: 'black',
        [theme.breakpoints.down('xs')]: {
            top: 'auto',
            bottom: '0',
        },
    },
    spacedIcons: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    iconLink: {
        color: '#868c91',
        width: '30px',
        height: '30px',
        border: '1px solid #5c5d5e',
        padding: '5px',
        borderRadius: '50%'
    },
    icons: {
        fontSize: '22px'
    },
    // This shit below doesn't want to apply itself!!
    // activeIcon: {
    //     color: '#e25822',
    //     border: '2px solid #e25822'
    // }
}));

export default navbarStyle;
