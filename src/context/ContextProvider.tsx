import { ReactNode, useMemo, useReducer } from 'react';
import { initialState } from '../utils';
import Context from './Context';
import { rootReducer } from '../store';

interface IContextProviderProps {
  children: ReactNode | ReactNode[];
}

const ContextProvider = ({ children }: IContextProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const store = useMemo(() => ({ state, dispatch }), [state]);

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export default ContextProvider;
