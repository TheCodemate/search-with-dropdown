import React, { ReactElement } from 'react';

interface DropdownItemPropsType {
  name: ReactElement;
  regularPrice: number;
  salePrice: number;
}

const DropdownItem = ({
  name,
  regularPrice,
  salePrice
}: DropdownItemPropsType) => {
  return (
    <div>
      {name}, {regularPrice}, {salePrice}
    </div>
  );
};

export default DropdownItem;

// komponent - główna logika
// typy (jeżeli są tylko do danego komponentu)
// style
