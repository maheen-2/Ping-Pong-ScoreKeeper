//linking html elements in JS.
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetButton");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const playTo = document.querySelector("#playTo");


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

//When we click on the score buttons, it increases the score by 1 and also displays it in the score keeper.
p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            //The classList property returns the CSS classnames of an element.
            //Add: Adds one or more tokens to the list
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            //U can see the color of buttons lightens i-e. disabled when the game is over.
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

//When we click on the score buttons, it increases the score by 1 and also displays it in the score keeper.
p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("has-text-success");
            p1Display.classList.add("has-text-danger");
            //U can see the color of buttons lightens i-e. disabled when the game is over.
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})


//We're selecting the event of change so that whenever the winning score changes, callback function is called.
//We can't just go with click, since maybe tthe user might not click on the scrollbar and go with the default initial value.
playTo.addEventListener("change", function () {
    //this will select the value of playTo.
    winningScore = parseInt(this.value);
    //reset function in the scrollbar will make sure that if in b/w the user changes the winning score then the player;s score change to 0.
    reset();
})


//When we click on the reset button, both of the score keepers change their values to 0 i-e. reset.
resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    //Remove: Removes one or more tokens from the list.
    p1Display.classList.remove("has-text-success", "has-text-danger");
    p2Display.classList.remove("has-text-success", "has-text-danger");
    //When th reset button is clicked, we want p1 and p2 button to be abled again.
    p1Button.disabled = false;
    p2Button.disabled = false;
}