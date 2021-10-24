import IBook from './IBook';

interface IState {
  data: IBook[];
  isDropActive: boolean;
  searchedPhrase: string;
}

export default IState;
