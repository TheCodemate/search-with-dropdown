import IBook from './IBook';

interface IState {
  data: IBook[];
  filteredData: IBook[];
  isDropActive: boolean;
  searchedPhrase: string;
}

export default IState;
