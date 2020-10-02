import axios, { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

import { TPost, TUser } from '../types/Types';

const GetUsers = (): Observable<AxiosResponse<TUser[]>> => from(axios.get<TUser[]>('https://jsonplaceholder.typicode.com/users'));

const GetPosts = (): Observable<AxiosResponse<TPost[]>> => from(axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts'));

export { GetUsers, GetPosts };
