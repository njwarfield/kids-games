import React from 'react'
import './App.css'
import Board from './family-match/Board'


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Board>
        </Board>
      </header>
    </div>
  );
}

export default App;
