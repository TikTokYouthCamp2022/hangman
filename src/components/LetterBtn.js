// The Letter Button component
// One for each of the 26 letters in the alphabet

function LetterBtn(props) {
    // User clicks this button to guess the letter.
    // Needs to update parent that button has been clicked
    // Or use Redux?

    function letterSelected () {
      // console.log(props.letter)
      props.parentCallback(props.letter)
    }
  
    return (
      <button onClick={letterSelected}>{ props.letter }, {props.btnInactive}</button>
    );
  }
  
  export default LetterBtn