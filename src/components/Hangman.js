// The Hangman animation component

function Hangman(props) {
    return (
      <>
      <p>This is the hangman component</p>
      <p>It is supposed to have the hangman image and animation</p>
      <svg height="250" width="200" class="figure-container">  
            <line x1="20" y1="230" x2="100" y2="230" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
            <line x1="60" y1="20" x2="60" y2="230" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
            <line x1="60" y1="20" x2="140" y2="20" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
            <line x1="140" y1="20" x2="140" y2="50" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
\            <circle cx="140" cy="70" r="20" stroke="black" class="figure-part" />
            <line x1="140" y1="90" x2="140" y2="150" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
            <line x1="140" y1="120" x2="120" y2="100" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
            <line x1="140" y1="120" x2="160" y2="100" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
            <line x1="140" y1="150" x2="120" y2="180" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
            <line x1="140" y1="150" x2="160" y2="180" stroke="black" stroke-width="5" stroke-linecap="round" class="figure-part" />
      </svg>
      </>
    );
  }
  
  export default Hangman