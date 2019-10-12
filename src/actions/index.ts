import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Action } from '../model/model';

type ActionReturn<T> = Action<T> | ((dispatch: Function) => any);

interface ImportedActions {
  [name: string]: (...args: any[]) => ActionReturn<any>;
}

export default function useActions(actions: ImportedActions): any {
  const dispatch = useDispatch();

  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map((a) => bindActionCreators(a, dispatch));
    }

    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch]);
}
