import { makeStyles, Theme } from '@material-ui/core';

import { iconOutlineColor } from '../../assets/tsstyles/constants';

const navbarStyle = makeStyles((theme: Theme) => ({
    navbar: {
        position: 'relative' as const,
        backgroundColor: 'transparent',
        borderBottom: `1px solid ${iconOutlineColor}`
    },
    // logoContainer: {
    // flex: 1,
    // display: 'flex',
    // alignItems: 'center',
    // position: 'relative' as const,
    // zIndex: 4,
    // },
    profileLogoContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        position: 'relative' as const,
        zIndex: 4
    },
    profileImg: {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        // paddingRight: '25px',
        // paddingLeft: '10px',
        position: 'relative' as const,
        top: '2px'
    },
    logoImg: {
        width: '145px',
        height: '28px',
        paddingRight: '25px',
        paddingLeft: '20px',
        position: 'relative' as const,
        top: '2px'
    },
    bottomNavBar: {
        backgroundColor: 'transparent',
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
