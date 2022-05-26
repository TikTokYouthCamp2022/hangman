// The Letter Button component
// One for each of the 26 letters in the alphabet
import "./LetterBtn.css"

function LetterBtn(props) {
    // User clicks this button to guess the letter.
    // Needs to update parent that button has been clicked
    // Or use Redux?
    const btnInactive = props.btnInactive;
    if (btnInactive == 1){
      return <button className="keys" disabled>{ props.letter }</button>
    }

    function letterSelected () {
      // console.log(props.letter)
      props.parentCallback(props.letter)
    }
  
    return (
      <button className="keys" onClick={letterSelected}>{ props.letter }</button>
    );
  }
  
  export default LetterBtn