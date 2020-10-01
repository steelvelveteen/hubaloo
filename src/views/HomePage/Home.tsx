import React from 'react';

import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

import { GetPosts } from '../../services/data.service';
import { TPost } from '../../types/Types';

const HomePage = (): React.ReactElement => {
    const [posts, setPosts] = React.useState<TPost[]>();

    React.useEffect(() => {
        const subscription = GetPosts()
            .pipe(
                map((response: AxiosResponse) => response.data),
            )
            .subscribe((response: TPost[]) => {
                setPosts(response);
            });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            <h3>Inside the home main page</h3>
            { posts && posts.map((post: TPost) => <div key={post.id}>{post.title}</div>)}
        </div>
    );
}
export default HomePage;
