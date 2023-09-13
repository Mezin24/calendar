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
        const response = await axios.get<User[]>('/users.json');
        console.log(response);
      } catch (error) {
        dispatch(
          AuthActionCreator.setError('Some problems while fetching user')
        );
      }
    },
  logout: () => async (dispatch: AppDispatch) => {},
};
