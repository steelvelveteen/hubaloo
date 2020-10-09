/* eslint-disable no-underscore-dangle */
import React from 'react';

import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

import GetAllUsers from '../../services/user-profile.service';
import { UserType } from '../../types/Types';

const ProfilePage: React.FC = () => {
    const [users, setUsers] = React.useState<UserType[]>();

    React.useEffect(() => {
        const subscription = GetAllUsers()
            .pipe(
                map(
                    (response: AxiosResponse) => response.data.users
                ),
            )
            .subscribe(
                (response: UserType[]) => {
                    setUsers(response)
                },
                (err: any) => {
                    console.log(err);
                }
            );

        return () => subscription.unsubscribe();
    }, []);
    return (
        <>
            <h3>Users that come from my api Heroku + ATLAS</h3>
            { users && users.map((user: UserType) => <div key={user._id}>{user.email}</div>)}
        </>
    );
};

export default ProfilePage;
