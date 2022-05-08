// The keyboard component
// Contains a LetterBtn for each of the letters in the alphabet

import LetterBtn from "./LetterBtn";

function Keyboard(props) {
    // the props will have the word to display
    // as well as the letters that have been guessed (so it knows which to show)
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
      <>
        <p>This is where we put the keyboard</p>
        <div>
            {letters.map((letter) => <LetterBtn letter={letter} />)}
        </div>
      </>
    );
  }
  
  export default Keyboard