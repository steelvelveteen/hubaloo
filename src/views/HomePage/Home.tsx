import React from 'react';

import { AxiosResponse } from 'axios';
import Axios from 'axios-observable';
import { map } from 'rxjs/operators';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const HomePage = (): React.ReactElement => {
    const [posts, setPosts] = React.useState<Post[]>();

    React.useEffect(() => {
        const subscription = Axios.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(
                map((response: AxiosResponse) => response.data),
            )
            .subscribe((response: Post[]) => {
                setPosts(response);
            });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            <h3>Inside the home main page</h3>
            {posts?.map((post: Post) => <div key={post.id}>{post.title}</div>)}
        </div>
    );
}
export default HomePage;
