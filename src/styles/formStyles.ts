import { makeStyles } from '@material-ui/core';

const FormStyles = makeStyles(() => ({
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
    promptContainer: {
        margin: '2rem 1rem 1rem 0',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.9rem'
    },
    promptUnit: {
        marginBottom: '1rem',
    },
    btn: {
        position: 'relative',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundColor: 'purple',
            color: 'white'
        },
        ' &:focus': {
            outline: 'none',
            // boxShadow: 'none',
            // transform: 'scale(1.3)',
        }
    },
    btnAlternative: {
        background: 'transparent',
        padding: '0.5rem 0.7rem',
        color: 'grey',
        marginLeft: '2rem',
        fontSize: '0.7rem',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        // borderBottom: '1px solid white',
        borderRadius: '5px',
        marginTop: '0.5rem',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundColor: 'purple',
            color: 'white'
        }
    },
    errorMessage: {
        color: '#e83317',
        fontSize: '0.8rem',
    },
    errorMsgContainer: {
        minHeight: '3.5rem',
        margin: '1rem 0',
    },
    successMessage: {
        color: 'green',
        fontSize: '0.8rem'
    },
    spinner: {
        color: 'white',
        // size: '100px'
    }
}));

export default FormStyles;
