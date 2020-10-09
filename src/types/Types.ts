type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type TUser = {
    _id: number;
    email: string;
    password: string;
};

type TCredentials = {
    email: string;
    password: string;
};

export type { TPost, TUser, TCredentials };
