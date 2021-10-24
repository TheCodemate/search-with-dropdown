import IBook from './IBook';

interface IAction {
  type:
    | 'SET_SEARCHED_PHRASE'
    | 'SET_DROPDOWN_ACTIVE'
    | 'SET_DROPDOWN_UNACTIVE'
    | 'DISPLAY_SEARCH_RESULTS';
  books?: IBook[];
  payload?: string;
}

export default IAction;
