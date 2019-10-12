import { Reducer } from 'redux';

import { Action } from '../model/model';

type ReducerHandlers<S> = { [type: string]: (state: S, action: Action<any>) => S }

function createReducer<S>(initialState: S, handlers: ReducerHandlers<S>): Reducer<S> {
  const reducer = (state: S = initialState, action: Action<S>): S => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };

  return reducer as Reducer<S>;
}

export default createReducer;
