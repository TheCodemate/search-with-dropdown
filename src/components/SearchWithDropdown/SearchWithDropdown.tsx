import { useContext } from 'react';
import { Context } from '../../context';
import { DropdownList } from '../../components';
import { ACTIONS } from '../../store';

const SearchWithDropdown = () => {
  const { state, dispatch } = useContext(Context);
  const { data, isDropActive, searchedPhrase } = state;

  console.log('searchedPhrase -> ', searchedPhrase);

  const handleActivateDropdown = (phrase: string) => {
    if (phrase.length >= 3) {
      dispatch({ type: ACTIONS.SET_DROPDOWN_ACTIVE });
      console.log('isDropDownActive: : ', state.isDropActive);
      // setCurrentData(
      // currentData.filter(
      // (item: { name: string; regularPrice: number; salePrice: number }) =>
      // item.name.toLocaleLowerCase().includes(phrase.toLocaleLowerCase()) //regexp
      // )
      // );
      //
      return;
    }

    dispatch({ type: ACTIONS.SET_DROPDOWN_UNACTIVE });
    console.log('isDropDownActive: : ', state.isDropActive);
    return;
  };

  // setIsDropActive(false);
  // setCurrentData(data);
  // };

  return (
    <div>
      <input
        type=""
        className="search-with-drop"
        onChange={e => {
          handleActivateDropdown(e.target.value);
          dispatch({
            type: ACTIONS.SET_SEARCHED_PHRASE,
            payload: e.target.value
          });
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
