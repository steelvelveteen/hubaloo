import React from 'react';

import { Card, Grid } from '@material-ui/core';

const ProfilePage: React.FC = () => {
    const salutation = 'Member Profile Header';

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        {salutation}
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default ProfilePage;
