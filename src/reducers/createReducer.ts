import { Reducer } from 'redux';

import { Action } from '../model/model';

export default function createReducer<S>(
  initialState: S,
  handlers: any,
): Reducer<S> {
  const r = (state: S = initialState, action: Action<S>): S => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };

  return r as Reducer<S>;
}
