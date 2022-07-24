//REFACTORING: Cleaning up our code in a more organized manner.

//putting all the data of player 1 under one label:
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector('#p1Display')
}

//putting all the data of player 2 under one label:
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#resetButton');
const playTo = document.querySelector('#playTo');
let winningScore = 3;
let isGameOver = false;

//Make afunction that will sum up all the conditions and rules for the game that will connect both players.
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//player 1 button (key):
p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

//player 2 button (key):
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    //Giving a for condition will let JS know what do we mean by p:
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}



//Adding Confetti:
