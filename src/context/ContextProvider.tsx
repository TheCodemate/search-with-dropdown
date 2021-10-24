import { ReactNode, useReducer } from 'react';
import { initialState } from '../utils';
import Context from './Context';
import { rootReducer } from '../store';

interface IContextProviderProps {
  children: ReactNode | ReactNode[];
}

const ContextProvider = ({ children }: IContextProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
