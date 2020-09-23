import { makeStyles, Theme } from '@material-ui/core';

import { mainBackgroundColor } from '../../assets/tsstyles/constants';

const loaderStyle = makeStyles((theme: Theme) => ({
    loaderWrapper: {
        position: 'relative',
        height: '100%',
        minHeight: '800px',
        width: '100%',
        backgroundColor: mainBackgroundColor,
        color: 'red'
    }
}));

export default loaderStyle;
