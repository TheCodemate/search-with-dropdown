import React from 'react';
import { highlightTextPart } from '../../utils';

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
  return (
    <div>
      {highlightTextPart(name, searchedPhrase)} regular price: {regularPrice},
      sale: {salePrice}
    </div>
  );
};

export default DropdownItem;

// komponent - główna logika
// typy (jeżeli są tylko do danego komponentu)
// style
