import { makeStyles } from '@material-ui/core';

import { lightPurple } from '../../assets/tsstyles/constants';

const promptUnitStyles = makeStyles(() => ({
    promptUnit: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        color: lightPurple
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
    }
}));

export default promptUnitStyles;
