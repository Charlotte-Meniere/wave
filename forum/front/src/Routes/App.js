import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //let bt = () => { return btn('mytest') };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by testing it !!
        </a>
      </header>
    </div>
  );
}

export default App;