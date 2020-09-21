import { makeStyles, Theme } from '@material-ui/core';

import { iconOutlineColor, mainBackgroundColor } from '../../assets/tsstyles/constants';

const navbarStyle = makeStyles((theme: Theme) => ({
    navbar: {
        position: 'relative' as const,
        backgroundColor: mainBackgroundColor,
        borderBottom: `1px solid ${iconOutlineColor}`
    },
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
        backgroundColor: mainBackgroundColor,
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
}));

export default navbarStyle;
