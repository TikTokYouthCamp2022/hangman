// This is the section that displays the letters that have been selected

function SelectionDisplay(props) {

    return (
      <>
      <p>Incorrect Letters</p>
      <div>
        {props.selectedLetters.map((value, ind) => 
            value===1 && props.lettersRequired[ind]===0 ?
            <span>{props.letters[ind]} </span> : ""
        )}
      </div>
      </>
    );
  }
  
  export default SelectionDisplay