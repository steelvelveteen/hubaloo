type TUser = {
    id: number;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
};

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
}
export type { TUser, TPost, TMongoUser };
