// The word component
// Will render the word to be guessed
// Each of the letters in the word is rendered using a LetterTile

import LetterTile from "./LetterTIle";

function Word(props) {
    // the props will have the word to display
    // as well as the letters that have been guessed (so it knows which to show)

    // console.log(props.word)
    // console.log(Array.from(props.word))
    // console.log(props.selectedLetters)
    // console.log(props.lettersRequired)
    
    function letterDisplay (char) {
        // console.log(props.letters.indexOf(char))
        if (char === " ") {
            return char
        }
        else if (props.selectedLetters[props.letters.indexOf(char)] == 1) {
            return char
        }
        else {
            return "+"
        }
               
    }
    return (
        <>
        <p>This is where we put the word to guess</p>
        <div>
            {Array.from(props.word).map((char) => 
                <LetterTile letterDisplay={letterDisplay(char)} />
            )}
        </div>
        </>
    );
  }
  export default Word