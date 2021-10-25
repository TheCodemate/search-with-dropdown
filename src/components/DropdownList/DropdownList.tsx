import React from 'react';
import { searchDataType } from '../../types';
import { DropdownItem } from '../../components';
import { DropdownListStyled } from './DropdownList.styled';

const DropdownList = ({ data, searchedPhrase }: searchDataType) => {
  return (
    <DropdownListStyled>
      {data.map((item, idx) => (
        <DropdownItem
          key={item.name + idx}
          name={item.name}
          searchedPhrase={searchedPhrase}
          regularPrice={item.regularPrice}
          salePrice={item.salePrice}
        />
      ))}
    </DropdownListStyled>
  );
};

export default DropdownList;
