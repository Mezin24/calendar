import { AuthActionCreator } from './auth/action-creators';
import { EventActions } from './event/action-creators';

export const allActionCreators = {
  ...AuthActionCreator,
  ...EventActions,
};
