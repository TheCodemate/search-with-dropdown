import { useContext } from 'react';
import { Context } from '../../context';
import { DropdownList } from '../../components';
import { ACTIONS } from '../../store';

const SearchWithDropdown = () => {
  const { state, dispatch } = useContext(Context);
  const { data, isDropActive, searchedPhrase } = state;

  // const [currentData, setCurrentData] = useState<any>(books); // dodać typ
  // const [searchedPhrase, setSearchPhrase] = useState('');
  // const [isDropActive, setIsDropActive] = useState(false); //useContext

  // const handleActivateDropdown = (phrase: string) => {
  // if (phrase.length > 3) {
  // setIsDropActive(true);
  // setCurrentData(
  // currentData.filter(
  // (item: { name: string; regularPrice: number; salePrice: number }) =>
  // item.name.toLocaleLowerCase().includes(phrase.toLocaleLowerCase()) //regexp
  // )
  // );
  //
  // return;
  // }

  // setIsDropActive(false);
  // setCurrentData(data);
  // };

  return (
    <div>
      <input
        type=""
        className="search-with-drop"
        onChange={e => {
          dispatch({
            type: ACTIONS.SET_SEARCHED_PHRASE,
            searchedPhrase: e.target.value
          });
          // handleActivateDropdown(e.target.value);
        }} //udeCallbsck
      />
      <DropdownList
        data={data}
        isDropActive={isDropActive}
        searchedPhrase={searchedPhrase}
      />
    </div>
  );
};

export default SearchWithDropdown;
