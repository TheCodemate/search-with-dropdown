import { IState } from '../types';
import books from './books';

const initialState: IState = {
  data: books,
  filteredData: [],
  isDropActive: false,
  searchedPhrase: ''
};

export default initialState;
