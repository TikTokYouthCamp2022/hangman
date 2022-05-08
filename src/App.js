import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import './App.css';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard';
import Word from './components/Word';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Hangman!</h1>
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
  const words = ["SPAGHETTI", "LASAGNA", "RAVIOLI", "PEPPERONI PIZZA"] 

  const [word, setWord] = useState("")
  const [selectedLetters, setSelectedLetters] = useState(new Array(26).fill(0)) // letters that have been selected
  const [gameState, setGamestate] =  useState("inactive") // [inactive, playing, solved, unsolved]
  const letters = useMemo(() => ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
  
  // useEffect(() => {
  //   // empty dependencies array
  //   // RUNS ONLY ONCE AFTER first render
  //   // Perhaps put code for word rnd here

  // }, [])

  // TODO: function to reset the game
  function resetGame () {
    console.log("Resetting game")
  }

  const letterSelectCallback = useCallback((letterSelected) => {
    let letterIndex = letters.indexOf(letterSelected);
    console.log("letterSelectCallback")
    console.log(letterIndex)
    setSelectedLetters(existingItems => {
      return [
        ...existingItems.slice(0, letterIndex),
        1,
        ...existingItems.slice(letterIndex + 1),
      ]
    })
  }, [letters]);
  
  function selectRandomWord () {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // TODO: check use of state hook in function
    setWord(randomWord)
  }

  function startGame () {
    selectRandomWord();
    setGamestate("playing");
  }

  // logging function to be removed later (seems to work already)
  function logVars () {
    console.log("Logging Vars:")
    console.log(word);
    console.log(selectedLetters)
    console.log(gameState)
  }
  
  return (
    <>
      <main>
        <h2>Welcome to the game!</h2>
        <p>The hidden word is: {word}</p>
        <Hangman/>
        <Word 
          word={word} 
          selectedLetters={selectedLetters}
          letters={letters}
        />
        <Keyboard 
          letters={letters}
          buttonClickCallback={letterSelectCallback} 
          selectedLetters={selectedLetters}
        />
        <button onClick={startGame}>Start Game</button>
        <button onClick={logVars}>Log Vars</button>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
