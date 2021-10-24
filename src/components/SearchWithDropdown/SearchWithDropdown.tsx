import { useContext } from 'react';
import { Context } from '../../context';
import { DropdownList } from '../../components';
import { ACTIONS } from '../../store';

const SearchWithDropdown = () => {
  const { state, dispatch } = useContext(Context);
  const { filteredData, isDropActive, searchedPhrase } = state;

  const handleActivateDropdown = (phrase: string) => {
    if (phrase.length >= 3) {
      dispatch({ type: ACTIONS.DISPLAY_SEARCH_RESULTS, payload: phrase });
      return;
    }
    dispatch({ type: ACTIONS.SET_DROPDOWN_UNACTIVE });
    return;
  };

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
      {isDropActive ? (
        <DropdownList
          data={filteredData}
          isDropActive={isDropActive}
          searchedPhrase={searchedPhrase}
        />
      ) : null}
    </div>
  );
};

export default SearchWithDropdown;
