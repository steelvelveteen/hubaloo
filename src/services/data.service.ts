import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

import { TCredentials, TMongoUser, TPost } from '../types/Types';

const token = 'eyJhbGciOiJIUzI1NiJ9.am9leXZpY29AZ21haWwuY29t.q3KyV9cSOkoa_JUiCBVDhzTltyA8GWyLC3evK8Ek6gE';

const herokuApiUrl = 'https://stormy-garden-32374.herokuapp.com';
const localApiUrl = 'http://localhost:8080';
const dockerlocalApiUrl = 'http://localhost:49160';

// const baseURL = localApiUrl;
// const baseURL = herokuApiUrl;
const baseURL = dockerlocalApiUrl;

const authAxios: AxiosInstance = axios.create({
    baseURL: herokuApiUrl,
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

const GetPosts = (): Observable<AxiosResponse<TPost[]>> => from(axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts'));

const GetUsersFromMyAPI = (): Observable<AxiosResponse<TMongoUser[]>> => from(authAxios.get<TMongoUser[]>('/users'));

// eslint-disable-next-line max-len
const LoginUser = (credentials: TCredentials): Observable<AxiosResponse<TMongoUser>> => from(axios.post<TMongoUser>(`${baseURL}/users/login`, credentials));

const SignupUser = (credentials: TCredentials): Observable<AxiosResponse<TMongoUser>> => from(axios.post<TMongoUser>(`${baseURL}/users/signup`, credentials));

export {
    GetPosts, GetUsersFromMyAPI, LoginUser, SignupUser
};
