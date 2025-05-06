const playerMove= process.argv.slice(2);

// check number of arguments(move)
if(playerMove.length < 1){
  console.error('Please select one move');
}
else if(playerMove.length > 1){
  console.error('Please select only one move');
};

//Genrate computer move
const randomNummer = Math.random();
let computerMove = '';

if(randomNummer >= 0 && randomNummer < 1/3 ){
  computerMove = 'rock';
}
else if(randomNummer >= 1/3 && randomNummer < 2/3){
  computerMove = 'paper';
} 
else if (randomNummer >= 2/3 && randomNummer < 1) {
  computerMove = 'scissor';
};

let result = '';
// Result of 'Rock'
if (playerMove == 'rock'){
  if (computerMove == 'rock'){
    result = 'You chose rock. Computer chose rock. Tie !';
  }
  else if (computerMove == 'paper'){
    result = 'You chose rock. Computer chose paper. You lose !';
  }
  else if (computerMove == 'scissor'){
    result = 'You chose roack. Computer chose scissor. You win !';
  }
  }

// Result of 'Paper'
  else if (playerMove == 'paper'){
    if (computerMove == 'rock'){
      result = 'You chose paper. Computer chose rock. You win !';
    }
    else if (computerMove == 'paper'){
      result = 'You chose paper. Computer chose paper. Tie !';
    }
    else if (computerMove == 'scissor'){
      result = 'You chose paper. Computer chose scissor. You lose !';
    }
  }

// Result of 'Scissor'
  else if (playerMove == 'scissor'){
    if (computerMove == 'rock'){
      result = 'You chose scissor. Computer chose rock. You lose !';
    }
    else if (computerMove == 'paper'){
      result = 'You chose scissor. Computer chose paper. You win !';
    }
    else if (computerMove == 'scissor'){
      result = 'You chose scissor. Computer chose scissor. Tie !';
    }
  };
console.log(result);
