import IBook from './IBook';

type searchDataType = {
  data: IBook[];
  isDropActive: boolean;
  searchedPhrase: string;
};

export default searchDataType;
