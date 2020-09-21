import { makeStyles, Theme } from '@material-ui/core';

import { containerBorderColor, drawerWidth, mainBackgroundColor } from '../../assets/tsstyles/constants';

const mainlayoutStyle = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
        position: 'relative' as const,
        top: '0'
    },
    mainPanel: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        background: mainBackgroundColor,
        width: '100%',
    },
    content: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '1.1rem',
            padding: '1.5rem 1rem',
        },
        margin: '1rem auto',
        color: 'white',
        minHeight: `calc(80% - 70px)`
    },
    container: {
        paddingRight: '1rem',
        paddingLeft: '1rem',
        marginRight: 'auto',
        marginLeft: 'auto'
    }
}));

export default mainlayoutStyle;
