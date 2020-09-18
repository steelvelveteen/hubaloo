import { makeStyles, Theme } from '@material-ui/core';

const mainlayoutStyle = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
    },
    mainPanel: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - 180px)`,
        },
        background: 'pink',
        width: '100%',
        height: '100vh',
    },
    content: {

    }
}));

export default mainlayoutStyle;
