import { User } from '../../../model/user';

export interface AuthState {
  isAuth: boolean;
  user: User;
  isLoading: boolean;
  error: string;
}

export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export interface SetUserhAction {
  type: AuthActionEnum.SET_USER;
  payload: User;
}

export interface SetIsLoadinghAction {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export type AuthAction =
  | SetAuthAction
  | SetUserhAction
  | SetIsLoadinghAction
  | SetErrorAction;
