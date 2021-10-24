import React from 'react';
import { searchDataType } from '../../types';
import { DropdownItem } from '../../components';
import { handleTextHighlighting } from '../../utils';

const DropdownList = ({
  data,
  isDropActive,
  searchedPhrase
}: searchDataType) => {
  if (!isDropActive) return null;
  return (
    <div>
      {data.map(item => (
        <DropdownItem
          name={handleTextHighlighting(item.name, searchedPhrase)}
          regularPrice={item.regularPrice}
          salePrice={item.salePrice}
        />
      ))}
    </div>
  );
};

export default DropdownList;
