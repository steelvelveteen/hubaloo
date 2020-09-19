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
        color: 'white'
    },
    logoLink: {
        flex: 1
    }
}));

export default navbarStyle;
