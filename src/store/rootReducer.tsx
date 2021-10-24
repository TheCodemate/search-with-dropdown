import { ACTIONS } from '../store';
import { IAction, IState } from '../types';

const rootReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ACTIONS.SET_SEARCHED_PHRASE:
      return {
        ...state,
        searchedPhrase: action.payload ? action.payload : ''
      };
    case ACTIONS.SET_DROPDOWN_ACTIVE:
      return {
        ...state,
        isDropActive: true
      };
    case ACTIONS.SET_DROPDOWN_UNACTIVE:
      return {
        ...state,
        isDropActive: false
      };

    default:
      return state;
  }
};

export default rootReducer;
