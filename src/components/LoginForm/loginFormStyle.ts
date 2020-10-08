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
    prompt: {
        margin: '1rem 1rem 1rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline'

    },
    btn: {
        padding: '0.5rem 1rem',
        cursor: 'pointer'
    },
    btnAlternative: {
        background: 'transparent',
        border: 'none',
        color: 'white',
        marginLeft: '1rem',
        fontSize: '1rem',
        outline: 'none',
        cursor: 'pointer'

    },
    errorMessage: {
        color: '#e83317',
        fontSize: '0.8rem'
    }

}));

export default loginFormStyle;
