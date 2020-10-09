import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { TCredentials, TUser } from '../types/Types';
import * as DataService from './data.service';

const Login = (credentials: TCredentials): Observable<AxiosResponse<TUser>> => DataService.Post(credentials, '/users/login');

const Signup = (credentials: TCredentials): Observable<AxiosResponse<TUser>> => DataService.Post(credentials, '/users/signup');

export { Login, Signup };
