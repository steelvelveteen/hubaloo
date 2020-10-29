import { makeStyles, Theme } from '@material-ui/core';

import { drawerWidth, fontColorTaupe, mainBackgroundColor } from '../../assets/tsstyles/constants';

const mainlayoutStyle = makeStyles((theme: Theme) => ({
    wrapper: {
        position: 'relative' as const,
        height: '100vh',
        width: '100%',
        top: '0',
    },
    mainPanel: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        background: mainBackgroundColor,
        width: '100%',
        minHeight: '100%'
    },
    content: {
        padding: '1.5rem 0.5rem',
        color: fontColorTaupe,
        [theme.breakpoints.up('sm')]: {
            // marginTop: '1.1rem',
            // padding: '1.5rem 1rem',
        },
        // margin: '1rem auto',
        // minHeight: `calc(80% - 70px)`,
    },
    container: {
        [theme.breakpoints.down('xs')]: {
            // marginTop: '1rem',
            // padding: '1.5rem 1rem',
        },
        paddingRight: '1rem',
        paddingLeft: '1rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingBottom: '1rem'

    }
}));

export default mainlayoutStyle;
