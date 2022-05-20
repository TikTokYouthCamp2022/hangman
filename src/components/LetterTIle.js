// The Letter tile button
// It will be filled in if the user has guessed the correct letter

function LetterTile(props) {

    // check conditional rendering if the props.letterDisplay is blank or not
    return (
      <>
      <span className="letter">{props.letterDisplay != "" ? props.letterDisplay : " "}</span>
      </>
    );
  }
  
  export default LetterTile