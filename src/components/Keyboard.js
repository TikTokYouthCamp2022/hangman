// The keyboard component
// Contains a LetterBtn for each of the letters in the alphabet
import { useCallback, useState } from "react";

import LetterBtn from "./LetterBtn";

function Keyboard(props) {
    const [letterSelected, setLetterSelected] = useState(0);

    // the props will have the word to display
    // as well as the letters that have been guessed (so it knows which to show)
    
    // console.log(props.selectedLetters)

    // callback is of type function
    const callback = useCallback((letter) => {
      console.log("letterbtn pressed:", letter)
      setLetterSelected(letter);
      props.buttonClickCallback(letter)
    }, [props]);

    return (
      <>
        <p>This is where we put the keyboard</p>
        <p>Letter pressed: {props.gameStatus == "playing" ? letterSelected : "_" } </p>
        <div>
            {props.letters.map((char, ind) => 
              <LetterBtn 
                key={char + ind}
                parentCallback={callback} 
                letter={char} 
                btnInactive={props.selectedLetters[ind]}
              />
            )}
        </div>
      </>
    );
  }
  
  export default Keyboard