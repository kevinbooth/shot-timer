import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <img src={logo} className="app__logo" alt="logo" />
      <button className="button">Start timer</button>
    </div>
  );
}

export default App;
