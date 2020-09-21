import React from 'react';

import axios, { AxiosResponse } from 'axios';

// import DataService from '../../services/data.service';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const HomePage = (): React.ReactElement => {
    const [posts, setPosts] = React.useState<Post[]>();
    React.useEffect(() => {
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then((response: AxiosResponse) => {
                setPosts(response.data);
            });
    }, []);

    return (
        <div>
            <div>Inside the home main page</div>
            {posts?.map((post: Post) => <div>{post.body}</div>)}
        </div>
    )
};

export default HomePage;
