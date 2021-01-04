const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'|| userInput==='paper' || userInput==='scissors')
  return userInput;
  else
  return console.log('error');
};
const input=getUserChoice('paper');


function getComputerChoice(){
  return Math.floor(Math.random() * 3);
  const randomNumber=getComputerChoice();
switch(randomNumber) {
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
}
} 

console.log(getComputerChoice());

function determineWinner(userChoice ,computerChoice){
  if(userChoice===computerChoice)
  return 'the game was a tie';
  if(userChoice==='rock'){
    if(computerChoice==='paper')
    return 'the computer won';
    else
    return 'the user won';
  }
  if(userChoice==='paper'){
    if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
  }
  if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();

