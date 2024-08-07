// src/App.tsx

import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <PasswordGenerator />
    </div>
  );
};

export default App;
