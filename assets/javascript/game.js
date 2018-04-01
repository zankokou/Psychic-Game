
// function stats(){
//     console.log("Wins: " + win);
//     console.log("Losses: " + loss);
//     console.log("Guesses: " + lives);
//     console.log("Guessed Words: "+ guessedArr);
// }

function updateScoreBoard(){
    document.getElementById("wins").innerHTML = "Wins: " + win;
    document.getElementById("loss").innerHTML = "Losses: " + loss;
    document.getElementById("guess").innerHTML = "Letters you have guessed: " + guessedArr;
    document.getElementById("lives").innerHTML = "Guesses Left: " + lives;
}

function rng(){
    compChoice = wordBox[Math.floor(Math.random() * wordBox.length)];
    console.log("CPU Choice " + compChoice);

}


var l = 10
var win = 0;
var loss = 0;
var lives = l;

var guessedArr = [];

wordBox = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var compChoice = wordBox[Math.floor(Math.random() * wordBox.length)];
console.log("CPU Choice " + compChoice);

document.onkeyup = function(event){
    var userChoice = event.key.toLowerCase();

        if (userChoice === compChoice) {
            win++;
            lives = l;
            alert("You win!!! " + "Letter was " + compChoice.toUpperCase())
            guessedArr = [];
            updateScoreBoard();
            rng();
        }

        else if (userChoice != compChoice) {
            lives--;
            guessedArr.push(userChoice);
            updateScoreBoard();

            if (lives === 0){
                loss++;
                guessedArr = [];
                lives = l;
                updateScoreBoard();
                alert("You ran out of guesses! Start over!");
                rng();
            }
    }
    

}//onkeyup Function
