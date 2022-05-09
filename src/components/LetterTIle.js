// The Letter tile button
// It will be filled in if the user has guessed the correct letter

function LetterTile(props) {

    // check conditional rendering if the props.letterDisplay is blank or not
    return (
      <>
      <span>{props.letterDisplay != " " ? props.letterDisplay : "_"}</span>
      </>
    );
  }
  
  export default LetterTile