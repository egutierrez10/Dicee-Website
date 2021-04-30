function checkWinner(num1, num2){
    if(num1 > num2){
        return "🚩 Player 1 Wins!";
    }else if(num1 < num2){
        return "Player 2 Wins! 🚩";
    }else{
        return "Draw!!";
    }
}

function diceRoll(){
    var leftDice = document.getElementById('leftDice');
    var rightDice = document.getElementById('rightDice');

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    leftDice.setAttribute('src', './images/dice' + randomNumber1 + '.png');

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    rightDice.setAttribute('src', './images/dice' + randomNumber2 + '.png');

    document.getElementById('titleHead').textContent = checkWinner(randomNumber1, randomNumber2);
}