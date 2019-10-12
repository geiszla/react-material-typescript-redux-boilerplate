import { Action, ActionType, User } from '../model/model';

export function login(user: User): Action<User> {
  return { type: ActionType.LOGIN_SUCCESS, payload: user };
}

export function logout(): Action<string> {
  return { type: ActionType.LOGOUT, payload: '' };
}
