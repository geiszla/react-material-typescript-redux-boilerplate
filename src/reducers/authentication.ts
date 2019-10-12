import { Action, ActionType } from '../model/model';
import createReducer from './createReducer';

export default {
  email: createReducer<string | null>(null, {
    [ActionType.LOGIN_SUCCESS](_: string | null, action: Action<string>) {
      return action.payload;
    },
    [ActionType.LOGIN_FAILURE]() {
      return null;
    },
    [ActionType.LOGOUT]() {
      return null;
    },
  }),
};
