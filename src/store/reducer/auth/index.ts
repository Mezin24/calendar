import { User } from '../../../model/user';
import { AuthAction, AuthActionEnum, AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  user: {} as User,
  error: '',
  isLoading: false,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false, error: '' };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload, error: '' };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
