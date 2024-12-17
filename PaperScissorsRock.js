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
  