import axios, { AxiosResponse } from 'axios';
import { User } from '../model/user';

export class UserService {
  static async fetchUsers(): Promise<AxiosResponse<User[]>> {
    return await axios.get<User[]>('/users.json');
  }
}
