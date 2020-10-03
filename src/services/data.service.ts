import axios, { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

import { TMongoUser, TPost, TUser } from '../types/Types';

const GetUsers = (): Observable<AxiosResponse<TUser[]>> => from(axios.get<TUser[]>('https://jsonplaceholder.typicode.com/users'));

const GetPosts = (): Observable<AxiosResponse<TPost[]>> => from(axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts'));

const GetUsersFromMyAPI = (): Observable<AxiosResponse<TMongoUser[]>> => from(axios.get<TMongoUser[]>('https://stormy-garden-32374.herokuapp.com/users'));

export { GetUsers, GetPosts, GetUsersFromMyAPI };
