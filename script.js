function playGame(playerMove) {
    const computerNumber = pickComputerNumber();
    let result = ''
    if (playerMove === 'scissors') {
        if (computerNumber === 'rock') {
            result = 'You lose'
        }else if (computerNumber === 'paper') {
            result = 'You win'
        }else if (computerNumber === 'scissors') {
            result = 'Tie'
        }
        }else if (playerMove === 'paper') {
            if (computerNumber === 'rock') {
            result = 'You win'
        }else if (computerNumber === 'paper') {
            result = 'Tie'
        }else if (computerNumber === 'scissors') {
            result = 'You lose'
        }
        }else if (playerMove === 'rock') {
            if (computerNumber === 'rock') {
            result = 'Tie'
        }else if (computerNumber === 'paper') {
            result = 'You lose'
        }else if (computerNumber === 'scissors') {
            result = 'You win'
        }
        }
        
        const showResult = document.querySelector('.result');
        const compMove = document.querySelector('.computer-move');
        if (result === 'You lose') {
        if (computerNumber === 'rock') {
            showResult.innerHTML = '<i><img src="rock.png" alt="" width="100px"></i>';
        }else if (computerNumber === 'paper') {
            showResult.innerHTML = '<i><img src="paper.png" alt="" width="120px"></i>' ;
        }else if (computerNumber === 'scissors') {
            showResult.innerHTML = '<i"><img src="scissors.png" alt="" width="120px"></i>';
        }
    }else if (result === 'You win') {
        if (playerMove === 'rock') {
            showResult.innerHTML = '<span><i style="font-size:70px;"  class="fa-solid fa-hand-back-fist"></i></span>';
        }else if (playerMove === 'paper') {
            showResult.innerHTML = '<span><i style="font-size:70px;" class="fa-solid fa-hand"></i></span>' ;
        }else if (playerMove === 'scissors') {
            showResult.innerHTML = '<span style="transform: rotate(90deg);"><i style="transform: scaleY(-1);font-size:70px;" class="fa-solid fa-hand-scissors"></i></span>';
        }
    }else if (result === 'Tie') {
        showResult.innerHTML = '<span><i style="font-size:70px;" class="fa-solid fa-circle-xmark"></i></span>'
    }
    if (computerNumber === 'rock') {
        compMove.innerHTML = '<i><img src="rock.png" alt="" width="100px"></i>';
    }else if (computerNumber === 'paper') {
        compMove.innerHTML = '<i><img src="paper.png" alt="" width="120px"></i>' ;
    }else if (computerNumber === 'scissors') {
        compMove.innerHTML = '<i"><img src="scissors.png" alt="" width="120px"></i>';
    }
}
function myChoice(choice) {
    const PM = document.querySelector('.player-move');
    if (choice === 'rock') {
        PM.innerHTML = '<span><i class="fa-solid fa-hand-back-fist"></i></span>';
    }else if (choice === 'paper') {
        PM.innerHTML = '<span><i class="fa-solid fa-hand"></i></span>' ;
    }else if (choice === 'scissors') {
        PM.innerHTML = '<span style="transform: rotate(90deg);"><i style="transform: scaleY(-1)" class="fa-solid fa-hand-scissors"></i></span>';
    }
}
function pickComputerNumber() {
    const randomNumber = Math.random();

    let computerNumber = '';

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerNumber = 'rock'
    }else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerNumber = 'paper'
    }else if (randomNumber > 2/3 && randomNumber < 1 ) {
        computerNumber ='scissors'
    }

     return computerNumber;
    }