import React from 'react';
import { highlightTextPart } from '../../utils';
import { DropdownItemStyled } from './DropdownItem.styled';

interface DropdownItemPropsType {
  name: string;
  regularPrice: number;
  salePrice: number;
  searchedPhrase: string;
}

const DropdownItem = ({
  name,
  searchedPhrase,
  regularPrice,
  salePrice
}: DropdownItemPropsType) => {
  const highlightedBits = highlightTextPart(name, searchedPhrase);

  return (
    <DropdownItemStyled>
      {highlightedBits}
      <span>regular price: {regularPrice}</span>
      <span>sale: {salePrice}</span>
    </DropdownItemStyled>
  );
};

export default DropdownItem;

// komponent - główna logika
// typy (jeżeli są tylko do danego komponentu)
// style
