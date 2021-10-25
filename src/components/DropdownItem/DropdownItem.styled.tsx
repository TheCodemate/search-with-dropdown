import styled from 'styled-components';

const DropdownItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid rgba(100, 182, 172);
  padding: 10px 0;
  transition: 0.3s ease-out;

  &:first-of-type {
    border-top: none;
  }

  &:hover {
    border-left: 3px solid rgba(100, 182, 172);
    box-shadow: inset 0 0 10px rgb(149, 196, 220);
  }
`;

export { DropdownItemStyled };
