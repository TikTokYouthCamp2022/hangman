import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard';
import Word from './components/Word';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/game">Game</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}


function Game() {
  // temporary database of words to guess (to be upgraded later :D)
  const words = ["spaghetti", "lasagna", "pepperoni pizza", "ravioli"]
  
  useEffect(() => {
    // empty dependencies array
    // RUNS ONLY ONCE AFTER first render
  }, [])
  
  return (
    <>
      <main>
        <h2>Welcome to the game!</h2>
        <Hangman/>
        <Word/>
        <Keyboard/>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}



export default App;
