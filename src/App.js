import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
    </div>
  );
}

export default App;
