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
        border: '1px solid #720178',
        borderRadius: '5px',
        background: 'transparent',
        color: '#720178',
        outline: 'none'
    },
    promptContainer: {
        alignItems: 'center',
        fontSize: '0.9rem'
    },
    promptUnit: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        color: '#720178'
    },
    btn: {
        position: 'relative',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundColor: '#720178',
            color: 'white'
        },
        ' &:focus': {
            outline: 'none',
        }
    },
    btnAlternative: {
        background: 'transparent',
        color: 'grey',
        fontSize: '0.7rem',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        // borderRadius: '5px',
        marginTop: '0.5rem',
        '&:hover': {
            color: '#720178'
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
        color: '#720178',
        // size: '100px'
    }
}));

export default FormStyles;
