import { ACTIONS } from '../store';
import { IAction, IState } from '../types';

const rootReducer = (state: IState, action: IAction): IState => {
  const { searchedPhrase } = state;
  switch (action.type) {
    case ACTIONS.SET_SEARCHED_PHRASE:
      return {
        ...state,
        searchedPhrase: searchedPhrase
      };

    default:
      return state;
  }
};

export default rootReducer;
