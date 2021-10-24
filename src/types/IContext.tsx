import { Dispatch } from 'react';

import IState from './IState';
import IAction from './IAction';

interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}

export default IContext;
