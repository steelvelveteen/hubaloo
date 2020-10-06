import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

import { TMongoUser, TPost } from '../types/Types';

const token = 'eyJhbGciOiJIUzI1NiJ9.am9leXZpY29AZ21haWwuY29t.q3KyV9cSOkoa_JUiCBVDhzTltyA8GWyLC3evK8Ek6gE';

const herokuApiUrl = 'https://stormy-garden-32374.herokuapp.com';
const localApiUrl = 'http://localhost:4000';

const authAxios: AxiosInstance = axios.create({
    baseURL: herokuApiUrl,
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

const GetPosts = (): Observable<AxiosResponse<TPost[]>> => from(axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts'));

const GetUsersFromMyAPI = (): Observable<AxiosResponse<TMongoUser[]>> => from(authAxios.get<TMongoUser[]>('/users'));

type TLoginCredentials = {
    email: string;
    password: string;
};

// eslint-disable-next-line max-len
const LoginUser = (credentials: TLoginCredentials): Observable<AxiosResponse<TMongoUser>> => from(axios.post<TMongoUser>(`${localApiUrl}/login`, credentials));

export { GetPosts, GetUsersFromMyAPI, LoginUser };
