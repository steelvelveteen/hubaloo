import { makeStyles, Theme } from '@material-ui/core';

const mainlayoutStyle = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
        position: 'relative' as const,
        top: '0'
    },
    mainPanel: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - 210px)`,
        },
        background: 'pink',
        width: '100%',
        height: '100vh',
    },
    content: {
        color: 'black',
        backgroundColor: 'yellow',
        // marginTop: '1.1rem',
        padding: '1.5rem 1rem',
        minHeight: 'calc(100vh - 125px)'
    },
    container: {
        paddingRight: '1rem',
        paddingLeft: '1rem',
        marginRight: 'auto',
        marginLeft: 'auto'
    }
}));

export default mainlayoutStyle;
