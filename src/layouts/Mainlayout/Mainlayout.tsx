import React from 'react';

import mainlayoutStyle from './mainlayoutStyle';

const useStyles = mainlayoutStyle;

const Mainlayout: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.mainPanel}>Main Panel</div>
        </div>
    )
};

export default Mainlayout;
