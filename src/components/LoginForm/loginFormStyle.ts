import { makeStyles } from '@material-ui/core';

const loginFormStyle = makeStyles(() => ({
    form: {
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputFields: {
        margin: '0.5rem 1rem',
        padding: '0.5rem',
        border: '1px solid white',
        borderRadius: '5px',
        marginRight: '1rem',
        background: 'transparent',
        color: 'white'
    },
    prompt: {
        margin: '1rem 1rem 1rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        fontSize: '0.9rem'
    },
    btn: {
        position: 'relative',
        padding: '0.5rem 1rem',
        cursor: 'pointer'
    },
    btnAlternative: {
        background: 'transparent',
        padding: '0.5rem 0.7rem',
        color: 'white',
        marginLeft: '1rem',
        fontSize: '0.9rem',
        outline: 'none',
        cursor: 'pointer',
        border: '1px solid white',
        borderRadius: '5px',

    },
    errorMessage: {
        color: '#e83317',
        fontSize: '0.8rem',
    },
    errorMsgContainer: {
        minHeight: '3.5rem',
        margin: '1rem 0',
    },
    spinner: {
        position: 'absolute',
        right: '-1px'
    }
}));

export default loginFormStyle;
