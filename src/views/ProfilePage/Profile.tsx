/* eslint-disable no-underscore-dangle */
import React from 'react';

import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

import GetAllUsers from '../../services/user-profile.service';
import { UserType } from '../../types/Types';

const ProfilePage: React.FC = () => {
    React.useEffect(() => {
        const subscription = GetAllUsers()
            .pipe(
                map(
                    (response: AxiosResponse) => response.data.users
                ),
            )
            .subscribe(
                (response: UserType[]) => {
                },
                (err: any) => {
                }
            );

        return () => subscription.unsubscribe();
    }, []);
    return (
        <>
            <h3>User profile page</h3>
        </>
    );
};

export default ProfilePage;
