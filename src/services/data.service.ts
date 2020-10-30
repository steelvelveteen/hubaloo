import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

import { TPost } from '../types/Types';

const token = localStorage.getItem('token');

const herokuApi = 'https://stormy-garden-32374.herokuapp.com';
const localNodeApi = 'http://localhost:8080';
const localDockerApi = 'http://localhost:49160';
const elasticBeanStalkApi = 'http://habalooapiebdocker-env.eba-mfhpxbcb.ap-southeast-2.elasticbeanstalk.com';
const localNetcoreApi = 'http://localhost:5000';

const customBaseURL = localNetcoreApi;

const authAxios: AxiosInstance = axios.create({
    baseURL: customBaseURL,
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

const GetPosts = (): Observable<AxiosResponse<TPost[]>> => from(axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts'));

const Post = <T, V>(body: T, url: string): Observable<AxiosResponse<V>> => from(axios.post<V>(`${customBaseURL}${url}`, body));

const Get = <T, V>(body: T, url: string): Observable<AxiosResponse<V>> => from(axios.post<V>(`${customBaseURL}${url}`));

const GetWithAuthorization = <T>(url: string): Observable<AxiosResponse<T>> => from(authAxios.get<T>(`${customBaseURL}${url}`));

export {
    GetPosts, Post, Get, GetWithAuthorization
};
