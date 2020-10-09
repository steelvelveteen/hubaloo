import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { CredentialsType, UserType } from '../types/Types';
import * as DataService from './data.service';

const Login = (credentials: CredentialsType): Observable<AxiosResponse<UserType>> => DataService.Post(credentials, '/users/login');

const Signup = (credentials: CredentialsType): Observable<AxiosResponse<UserType>> => DataService.Post(credentials, '/users/signup');

export { Login, Signup };
