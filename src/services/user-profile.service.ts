import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { UserType } from '../types/Types';
import * as DataService from './data.service';

const GetAllUsers = (): Observable<AxiosResponse<UserType[]>> => DataService.GetWithAuthorization('/user');

export default GetAllUsers;
