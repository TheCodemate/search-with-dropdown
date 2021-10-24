import React from 'react';
import './App.css';
import { ContextProvider } from './context';
import { SearchWithDropdown } from './components';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <SearchWithDropdown />
      </div>
    </ContextProvider>
  );
}

export default App;
