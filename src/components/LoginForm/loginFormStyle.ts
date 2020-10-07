import { makeStyles } from '@material-ui/core';

const loginFormStyle = makeStyles(() => ({
    formContainer: {
        marginTop: '2rem',
        zIndex: 2,
    },
    form: {
        marginBottom: '1rem'
    },
    inputFields: {
        margin: '0.5rem 1rem',
        padding: '0.5rem',
        borderRadius: '5px',
        marginRight: '1rem',
        background: 'transparent',
        border: '1px solid white',
        color: 'white'
    },
    registerPrompt: {
        margin: '1rem 0',
    },
    btn: {
        padding: '0.5rem 1rem'
    },
    errorMessage: {
        color: 'red'
    }

}));

export default loginFormStyle;
