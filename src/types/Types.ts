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

type ResetCredentialsType = {
    email: string;
    newPassword: string;
}

export type { TPost, UserType, CredentialsType, ResetCredentialsType };
