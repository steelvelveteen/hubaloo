import { makeStyles } from '@material-ui/core';

import { fontColorTaupe, lightPurple } from '../assets/tsstyles/constants';

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
        border: `1px solid ${lightPurple}`,
        borderRadius: '5px',
        background: 'transparent',
        color: fontColorTaupe,
        outline: 'none'
    },
    promptContainer: {
        alignItems: 'center',
        fontSize: '0.9rem'
    },
    btn: {
        color: fontColorTaupe,
        position: 'relative',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundColor: lightPurple,
            color: 'white'
        },
        ' &:focus': {
            outline: 'none',
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
