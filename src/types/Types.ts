type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type UserType = {
    _id: number;
    email: string;
    password: string;
};

type CredentialsType = {
    email: string;
    password: string;
};

export type { TPost, UserType, CredentialsType };
