import axios from 'axios';
import { AppDispatch } from '../..';
import { User } from '../../../model/user';
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadinghAction,
  SetUserhAction,
} from './types';
import { UserService } from '../../../api/userService';

export const AuthActionCreator = {
  setAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: isAuth,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadinghAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  setUser: (user: User): SetUserhAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreator.setIsLoading(true));
        setTimeout(async () => {
          const { data } = await UserService.fetchUsers();
          const user = data.find(
            (item) => item.username === username && item.password === password
          );
          if (!user) {
            return dispatch(
              AuthActionCreator.setError('Incorrect user or password')
            );
          } else {
            dispatch(AuthActionCreator.setUser(user));
            dispatch(AuthActionCreator.setAuth(true));
            localStorage.setItem('auth', 'true');
            localStorage.setItem('user', user.username);
          }
        }, 1000);
      } catch (error) {
        dispatch(
          AuthActionCreator.setError('Some problems while fetching user')
        );
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    dispatch(AuthActionCreator.setUser({} as User));
    dispatch(AuthActionCreator.setAuth(false));
  },
};
