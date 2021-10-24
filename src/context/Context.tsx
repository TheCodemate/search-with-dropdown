import { createContext } from 'react';
import { initialState } from '../utils';
import { IContext } from '../types';

const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => undefined
});

export default Context;
