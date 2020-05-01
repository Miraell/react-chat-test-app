import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Components/Chat';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Chat for FpsMax</h2>
        <Chat />
      </header>
    </div>
  );
}

export default App;
