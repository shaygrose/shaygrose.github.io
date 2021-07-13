import React from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App" id="outer-container">
      <div class="page-content">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/> 
        <header className="App-header">
          <h1>
            Shayna Grose
          </h1>
          <p>
            Welcome to my website! It's currently under construction but in the meantime feel free to check out my&nbsp;
            <a
              className="App-link"
              href="https://www.linkedin.com/in/shayna-grose-0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          
        </header>
      </div>
    </div>
  );
}

export default Home;
