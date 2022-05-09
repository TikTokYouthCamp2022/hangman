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

// TODO: [optional] fill in our about section i guess haha 
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

  const [gameState, setGameState] = useState({
    word: "",
    livesLeft: 10, // 10 lives, one for each stroke of the hangman
    selectedLetters: new Array(26).fill(0), // letters that have been selected
    lettersRequired: new Array(26).fill(0), 
    gameStatus: "inactive", // [inactive, playing, solved, unsolved]
  })


  const letters = useMemo(() => ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);


  // TODO: function to reset the game
  function resetGame () {
    console.log("Resetting game")
    setGameState({
      word: "",
      livesLeft: 10,
      selectedLetters: new Array(26).fill(0), // letters that have been selected
      lettersRequired: new Array(26).fill(0), 
      gameStatus: "inactive", // [inactive, playing, solved, unsolved]
    })
    
  }

  // TODO: function to deduce letters not listed in the word string
  function computeWrongLetters () {

  }

  // TODO: implement lives left (ie how many letters wrongly selected)
  // TODO: function to check if all the letters of the required word are selected
  function checkWinCondition () {
    // compare selectedLetters with Letters required
  }


  const letterSelectCallback = useCallback((letterSelected) => {
    let letterIndex = letters.indexOf(letterSelected);
    console.log("letterSelectCallback:", letterIndex)
    setGameState(previousValues => ({
      ...previousValues, 
      selectedLetters: [
        ...gameState.selectedLetters.slice(0, letterIndex),
        1,
        ...gameState.selectedLetters.slice(letterIndex + 1),
      ]
    }))
  }, [letters, gameState.selectedLetters]);
  
  function selectRandomWord () {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // TODO: check use of state hook in function
    

    let lettersRequiredArr = new Array(26).fill(0)
    
    for (var i = 0; i <randomWord.length; i++) {
      let letterIndex = letters.indexOf(randomWord.charAt(i));
      if (letterIndex !== -1) {
        lettersRequiredArr[letterIndex] = 1
      }
    }

    // console.log("lettersRequiredArr")
    // console.log(lettersRequiredArr)

    setGameState(previousValues => ({
      ...previousValues, 
      word: randomWord,
      gameStatus: "playing", 
      lettersRequired: lettersRequiredArr, 
    }))
    
  }

  // TODO: update this button to either hide itself or change functionality based on gamestate
  function startGame () {
    selectRandomWord();
  }

  // logging function to be removed later (seems to work already)
  function logVars () {
    console.log("Logging Vars:")
    console.log(gameState)
  }
  
  return (
    <>
      <main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
        <hr/>
        <h2>Welcome to the game!</h2>
        <p>The hidden word is: {gameState.word}</p>
        <Hangman/>
        <Word 
          word={gameState.word} 
          selectedLetters={gameState.selectedLetters}
          letters={letters}
          lettersRequired={gameState.lettersRequired}
        />
        <Keyboard 
          letters={letters}
          buttonClickCallback={letterSelectCallback} 
          selectedLetters={gameState.selectedLetters}
        />
        <hr/>
        <button onClick={startGame}>Start Game</button>
        <button onClick={logVars}>Log Vars</button>
      </main>
      
    </>
  );
}

export default App;
