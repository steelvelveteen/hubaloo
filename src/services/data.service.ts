import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

import { TPost } from '../types/Types';

const token = localStorage.getItem('token');

const herokuApiUrl = 'https://stormy-garden-32374.herokuapp.com';
const localApiUrl = 'http://localhost:8080';
const dockerlocalApiUrl = 'http://localhost:49160';
const elasticBeanStalkURLaws = 'http://habalooapiebdocker-env.eba-mfhpxbcb.ap-southeast-2.elasticbeanstalk.com';

const customBaseURL = elasticBeanStalkURLaws;

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
