import React from 'react';

import welcomeTitleStyle from './welcomeTitleStyle';

const useStyles = welcomeTitleStyle;

const WelcomeTitle: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <h2 className={classes.welcomeTitle}>Welcome</h2>
            <h4 className={classes.welcomeTitle}>to </h4>
            <h3 className={classes.welcomeTitle}>Hubaloo</h3>
        </>
    )
};

export default WelcomeTitle;
