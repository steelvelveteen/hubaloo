type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type TMongoUser = {
    _id: number;
    email: string;
    password: string;
};

type TCredentials = {
    email: string;
    password: string;
};

export type { TPost, TMongoUser, TCredentials };
