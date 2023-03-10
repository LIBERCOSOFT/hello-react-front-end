import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
