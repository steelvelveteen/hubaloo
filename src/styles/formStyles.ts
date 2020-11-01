import { makeStyles } from '@material-ui/core';

import { fontColorTaupe, lightenedBgColorPurple } from '../assets/tsstyles/constants';

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
        border: `1px solid ${lightenedBgColorPurple}`,
        borderRadius: '5px',
        background: 'transparent',
        color: fontColorTaupe,
        outline: 'none'
    },
    promptContainer: {
        alignItems: 'center',
        fontSize: '0.9rem'
    },
    promptUnit: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        color: lightenedBgColorPurple
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
            backgroundColor: lightenedBgColorPurple,
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
