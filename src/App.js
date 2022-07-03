import logo from './logo.svg';
import './App.css';
import './components/DecklistGenerator';
import DecklistGenerator from './components/DecklistGenerator';
import { useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DecklistGenerator />
      </header>
    </div>
  );
}

export default App;
