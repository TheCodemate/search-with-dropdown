import React from 'react';
import './App.styld.tsx';
import { ContextProvider } from './context';
import { SearchWithDropdown } from './components';
import { AppStyled } from './App.styld';

function App() {
  return (
    <AppStyled>
      <ContextProvider>
        <SearchWithDropdown />
      </ContextProvider>
    </AppStyled>
  );
}

export default App;
