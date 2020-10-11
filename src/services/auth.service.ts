import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { CredentialsType, ResetCredentialsType, UserType } from '../types/Types';
import * as DataService from './data.service';

const emailFormat = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = (credentials: CredentialsType): Observable<AxiosResponse<UserType>> => DataService.Post(credentials, '/auth/login');

const SignUp = (credentials: CredentialsType): Observable<AxiosResponse<UserType>> => DataService.Post(credentials, '/auth/signup');

const ResetPassword = (credentials: ResetCredentialsType): Observable<AxiosResponse<UserType>> => DataService.Post(credentials, '/auth/resetPassword');

const validateEmail = (email: string): RegExpMatchArray | null => email.match(emailFormat);

const validatePassword = (password: string): boolean => password.length >= 8;

export {
    Login, SignUp, validateEmail, validatePassword, ResetPassword
};
