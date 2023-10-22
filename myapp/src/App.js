import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Make a GET request to your backend or an external API
    axios.get('/api/data')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts


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
