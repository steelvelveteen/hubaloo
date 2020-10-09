import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { TUser } from '../types/Types';
import * as DataService from './data.service';

const GetAllUsers = (): Observable<AxiosResponse<TUser[]>> => DataService.GetWithAuthorization('/users');

export default GetAllUsers;
