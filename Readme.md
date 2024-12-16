
# Rock, Paper, Scissors Game with Cheat Code

## Overview 📝
This is a simple implementation of the classic Rock, Paper, Scissors game with a twist. The game allows users to input either `rock`, `paper`, or `scissors`, and the computer randomly chooses one as well. The game also includes a cheat code: if the user types `bomb`, they automatically win, regardless of the computer's choice.

## Features 🌟
- **User Input**: The user can choose between `rock`, `paper`, `scissors`, or `bomb` (the cheat code).
- **Computer Choice**: The computer randomly selects `rock`, `paper`, or `scissors`.
- **Winner Determination**: The game compares the user's choice and the computer's choice to determine the winner.
- **Cheat Code**: If the user inputs `bomb`, they automatically win.

## Game Rules 🎮
- **Rock** ✊ destroys **Scissors** ✂️.
- **Scissors** ✂️ cut **Paper** 📄.
- **Paper** 📄 covers **Rock** ✊.
- If both the user and computer choose the same, it's a tie 🤝.
- If the user inputs `bomb` 💣, they automatically win.

## How the Game Works ⚙️
1. The user is prompted to choose between `rock`, `paper`, `scissors`, or `bomb`.
2. The computer randomly selects `rock`, `paper`, or `scissors`.
3. The game compares the two choices and displays the result: whether the user won, lost, or tied.
4. If the user enters `bomb`, the user automatically wins, regardless of the computer's choice.

## How to Run the Code 🚀
To run this game, you will need a JavaScript environment (such as a web browser's console or Node.js). Here are the steps to run it:

### Using a Browser Console 🌐:
1. Open your browser.
2. Right-click and select "Inspect" or press `Ctrl + Shift + I` (Windows) or `Cmd + Option + I` (Mac).
3. Go to the "Console" tab.
4. Copy and paste the entire JavaScript code into the console.
5. Call the `playGame()` function to start the game.

### Using Node.js 💻:
1. Make sure you have Node.js installed.
2. Save the JavaScript code to a `.js` file (e.g., `rockPaperScissors.js`).
3. Open a terminal or command prompt.
4. Run the file using `node rockPaperScissors.js`.
5. The game will output the result in the terminal.

## Code 🖥️

```javascript
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  // Handle the cheat code 'bomb' here
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: Invalid choice');
    return null; // Returning null in case of invalid input
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  // Handle bomb cheat code
  if (userChoice === 'bomb') {
    return 'The user won with a bomb!';
  }

  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }
};

const playGame = () => {
  // You can change the user input here to test
  const userChoice = getUserChoice('bomb'); // Change this input as needed
  if (userChoice === null) {
    return; // Exit if invalid input is given
  }
  const computerChoice = getComputerChoice();

  console.log(`User Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame();
```

## Example Output 🎯
When running the game with the user choosing `rock`, the output will be something like:

```
User Choice: rock
Computer Choice: paper
The computer won!
```

If the user enters `bomb`, the output will always be:

```
User Choice: bomb
Computer Choice: scissors
The user won with a bomb!
```

## Notes 📌
- The cheat code (`bomb`) is a fun addition to the classic Rock, Paper, Scissors game. Use it to instantly win the game!
- The game can be easily extended to allow for multiple rounds or additional features such as score tracking.

