import { ACTIONS } from '../store';
import { IAction, IState } from '../types';

const rootReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ACTIONS.SET_SEARCHED_PHRASE:
      return {
        ...state,
        searchedPhrase: action.payload ? action.payload : ''
      };
    case ACTIONS.DISPLAY_SEARCH_RESULTS:
      return {
        ...state,
        filteredData: (state.filteredData = [...state.data].filter(book => {
          const filteredBooks = new RegExp(`${action.payload}`, 'gi').test(
            book.name
          );

          return filteredBooks;
        })),
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
