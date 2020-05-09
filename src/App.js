import React from 'react';
import logo from './logo.svg';
import './App.css';


/*
* lifecycle
* MOUNTING
* constructor() => render() => componentDidMount()
*
* UPDATES
* New Props || setState() => render() => componentDidUpdate()
*
* UNMOUNTING
* componentWillUnmount()
*
* ERROR
* componentDidCatch()
*/

function App() {
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
