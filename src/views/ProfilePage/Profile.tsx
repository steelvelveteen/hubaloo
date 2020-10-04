/* eslint-disable no-underscore-dangle */
import React from 'react';

import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

import { GetUsers, GetUsersFromMyAPI } from '../../services/data.service';
import { TMongoUser, TUser } from '../../types/Types';

const ProfilePage: React.FC = () => {
    const [users, setUsers] = React.useState<TUser[]>();
    const [mongoUsers, setMongoUsers] = React.useState<TMongoUser[]>();

    React.useEffect(() => {
        const subscription = GetUsers()
            .pipe(
                map((response: AxiosResponse) => response.data),
            )
            .subscribe((response: TUser[]) => {
                setUsers(response)
            });

        return () => subscription.unsubscribe();
    }, []);

    React.useEffect(() => {
        const subscription = GetUsersFromMyAPI()
            .pipe(
                map((response: AxiosResponse) => response.data.users),
            )
            .subscribe((response: TMongoUser[]) => {
                setMongoUsers(response)
            });

        return () => subscription.unsubscribe();
    }, []);
    return (
        <>
            <h3>Inside the profile page displaying users available from jsonplaceholder.com</h3>
            { users && users.map((user: TUser) => <div key={user.id}>{user.username}</div>)}

            <h3>Users that come from my api Heroku + ATLAS</h3>
            { mongoUsers && mongoUsers.map((user: TMongoUser) => <div key={user._id}>{user.email}</div>)}
        </>
    );
};

export default ProfilePage;
