import { makeStyles, Theme } from '@material-ui/core';

import { iconOutlineColor } from '../../assets/tsstyles/constants';

const navbarStyle = makeStyles((theme: Theme) => ({
    navbar: {
        position: 'relative' as const,
        backgroundColor: 'black',
        borderBottom: `1px solid ${iconOutlineColor}`
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
        borderTop: `1px solid ${iconOutlineColor}`
    },
    spacedIcons: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    iconLink: {
        color: iconOutlineColor,
        width: '30px',
        height: '30px',
        border: `1px solid ${iconOutlineColor}`,
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
