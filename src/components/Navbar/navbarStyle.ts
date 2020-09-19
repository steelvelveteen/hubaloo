import { makeStyles, Theme } from '@material-ui/core';

const navbarStyle = makeStyles((theme: Theme) => ({
    navbar: {
        position: 'relative' as const,
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
        paddingRight: '25px',
    },
    bottomNavBar: {
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
    }
}));

export default navbarStyle;
