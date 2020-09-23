import React from 'react';

import loaderStyle from './loaderStyle';

const useStyles = loaderStyle;
const Loader: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    console.log('Loader view is loaded');
    return (
        <div className={classes.loaderWrapper}>
            Loading content
            Loading content
            Loading content
            Loading content
            Loading content
            Loading content
            Loading content
            ...............
            ...............
            ...............
            ...............
            ...............
        </div>
    )
}
export default Loader;
