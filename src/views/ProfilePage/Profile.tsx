import React from 'react';

import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

import { GetUsers } from '../../services/data.service';
import { TUser } from '../../types/Types';

const ProfilePage: React.FC = () => {
    const [users, setUsers] = React.useState<TUser[]>();
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

    return (
        <>
            <h3>Inside the profile page displaying users available from jsonplaceholder.com</h3>
            { users && users.map((user: TUser) => <div key={user.id}>{user.username}</div>)}
        </>
    );
};

export default ProfilePage;
