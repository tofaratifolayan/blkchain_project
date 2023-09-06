import React from "react";
// import '../styles/NumberGuesser.css'

export default function NumberGuesser() {
  let target;

  const humanGuessInput = document.getElementById("human-guess");

  const roundNumberDisplay = document.getElementById("round-number");

  const computerGuessDisplay = document.getElementById("computer-guess");
  const humanScoreDisplay = document.getElementById("human-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  const targetNumberDisplay = document.getElementById("target-number");
  const computerWinsDisplay = document.getElementById("computer-wins");

  const guessButton = document.getElementById("guess");
  const nextRoundButton = document.getElementById("next-round");

  guessButton.addEventListener("click", () => {
    // Generate the target value
    target = generateTarget();
    // Retrieve the player's guess
    const currentHumanGuess = humanGuessInput.value;
    // Make a random 'computer guess'
    const computerGuess = Math.floor(Math.random() * 10);

    // Display the computer guess and the target
    computerGuessDisplay.innerText = computerGuess;
    targetNumberDisplay.innerText = target;

    // Determine if the human or computer wins:
    const humanIsWinner = compareGuesses(
      currentHumanGuess,
      computerGuess,
      target
    );
    const winner = humanIsWinner ? "human" : "computer";

    // Update the correct score:
    updateScore(winner);

    // Display the winner
    if (humanIsWinner) {
      guessButton.innerText = "You Win!!!!!";
      guessButton.classList.toggle("winning-text");
    } else {
      computerWinsDisplay.innerText = "Computer Wins!!!";
    }

    // winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';

    // Display the current scores:
    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;

    // Set the correct disabled state for the buttons
    guessButton.setAttribute("disabled", true);
    nextRoundButton.removeAttribute("disabled");
  });

  nextRoundButton.addEventListener("click", () => {
    // Increase the round number
    advanceRound();
    // Display the new round number
    roundNumberDisplay.innerText = currentRoundNumber;

    // Set the correct disabled state for the buttons
    nextRoundButton.setAttribute("disabled", true);
    guessButton.removeAttribute("disabled");

    // Reset the guess input box and the target number display:
    targetNumberDisplay.innerText = "?";
    guessButton.innerText = "Make a Guess";
    humanGuessInput.value = "";
    computerGuessDisplay.innerText = "?";
    computerWinsDisplay.innerText = "";
    guessButton.classList.remove("winning-text");
  });

  const addButton = document.getElementById("add");
  const subtractButton = document.getElementById("subtract");

  addButton.addEventListener("click", () => {
    humanGuessInput.value = +humanGuessInput.value + 1;
    handleValueChange(humanGuessInput.value);
  });

  subtractButton.addEventListener("click", () => {
    humanGuessInput.value = +humanGuessInput.value - 1;
    handleValueChange(humanGuessInput.value);
  });

  const handleValueChange = (value) => {
    if (value > 0 && value <= 9) {
      subtractButton.removeAttribute("disabled");
      addButton.removeAttribute("disabled");
    } else if (value > 9) {
      addButton.setAttribute("disabled", true);
    } else if (value <= 0) {
      subtractButton.setAttribute("disabled", true);
    }
  };

  humanGuessInput.addEventListener("input", function (e) {
    handleValueChange(e.target.value);
  });

  let humanScore = 0;
  let computerScore = 0;
  let currentRoundNumber = 1;

  // Write your code below:
  const generateTarget = () => Math.floor(Math.random() * 10);

  const getAbsoluteDistance = (n1, n2) => Math.abs(n1 - n2);

  const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humDiff = getAbsoluteDistance(humanGuess, secretTarget);
    const compDiff = getAbsoluteDistance(computerGuess, secretTarget);
    if (humDiff <= compDiff) {
      return true;
    } else {
      return false;
    }
  };

  const updateScore = (s) => {
    if (s === "human") {
      humanScore += 1;
    } else if (s === "computer") {
      computerScore += 1;
    } else {
      return "not valid input";
    }
  };

  const advanceRound = () => (currentRoundNumber += 1);

  // updateScore('human')
  // updateScore('computer')
  // console.log(humanScore)
  // console.log(computerScore)

  // advanceRound()
  // console.log(currentRoundNumber)

  return (
    <div>
      <div class="game-container">
        <header>
          <h1>Number Guesser!</h1>
        </header>

        <div class="rounds">
          <p class="round-label">
            Round <span id="round-number">1</span>
          </p>
          <p class="guess-label">
            Target Number: <span id="target-number">?</span>
          </p>
        </div>

        <div class="guessing-area">
          <div class="guess computer-guess">
            <div class="guess-title">
              <p class="guess-label">Computer</p>
              <p class="score-label">
                Score: <span id="computer-score">0</span>
              </p>
            </div>
            <p id="computer-guess">?</p>
            <p class="winning-text" id="computer-wins"></p>
          </div>
          <div class="guess human-guess">
            <div class="guess-title">
              <p class="guess-label">You</p>
              <p class="score-label">
                Score: <span id="human-score">0</span>
              </p>
            </div>
            <input type="number" id="human-guess" min={0} max={9} value={0} />
            <div class="number-controls">
              <button class="number-control left" id="subtract" disabled>
                -
              </button>
              <button class="number-control right" id="add">
                +
              </button>
            </div>
            <button class="button" id="guess">
              Make a Guess
            </button>
          </div>
        </div>

        <div class="next-round-container">
          <button class="button" id="next-round" disabled>
            Next Round
          </button>
        </div>
      </div>

      <div class="instructions">
        <div class="instruction">
          <h3>Step 1</h3>
          <p>Input a number between 0 and 9</p>
        </div>
        <div class="instruction">
          <h3>Step 2</h3>
          <p>
            Click "Make a Guess" to submit your guess and see who won the round.
          </p>
        </div>
        <div class="instruction">
          <h3>Step 3</h3>
          <p>Click "Next Round" to play again.</p>
        </div>
      </div>
    </div>
  );
}
