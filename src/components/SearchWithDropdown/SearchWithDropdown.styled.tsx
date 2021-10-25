import styled from 'styled-components';

const SearchWithDropdownStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SearchInputStyled = styled.input`
  border: 2px solid rgba(100, 182, 172);
  border-radius: 5px;
  margin: 20px;
  height: 40px;
  width: 90%;
`;

export { SearchInputStyled, SearchWithDropdownStyled };
