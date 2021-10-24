import React from 'react';
import { searchDataType } from '../../types';
import { DropdownItem } from '../../components';

const DropdownList = ({ data, searchedPhrase }: searchDataType) => {
  return (
    <div>
      {data.map(item => (
        <DropdownItem
          name={item.name}
          searchedPhrase={searchedPhrase}
          regularPrice={item.regularPrice}
          salePrice={item.salePrice}
        />
      ))}
    </div>
  );
};

export default DropdownList;
