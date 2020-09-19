import { makeStyles, Theme } from '@material-ui/core';

import { containerBorderColor, drawerWidth } from '../../assets/tsstyles/constants';

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
        background: 'black',
        width: '100%',
        height: '100vh',
    },
    content: {
        [theme.breakpoints.up('md')]: {
            borderLeft: `1px solid ${containerBorderColor}`,
            borderRight: `1px solid ${containerBorderColor}`,
        },
        margin: '1rem auto',
        // borderLeft: `1px solid ${containerBorderColor}`,
        // borderRight: `1px solid ${containerBorderColor}`,
        width: '80%',
        color: 'white',
        marginTop: '1.1rem',
        padding: '1.5rem 1rem',
        // maxHeight: '30%',
        // height: '100%'
        minHeight: `calc(80% - 70px)`
    },
    container: {
        // backgroundColor: 'grey',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        marginRight: 'auto',
        marginLeft: 'auto'
    }
}));

export default mainlayoutStyle;
